import React, { createContext, useContext, useState } from "react";
import { storage } from "../utils/storage";

type Settings = {
  theme: "light" | "dark";
  sidebarWidth: number;
};

const defaultSettings: Settings = {
  theme: "dark",
  sidebarWidth: 300,
};

const SettingsContext = createContext<{
  settings: Settings;
  updateSetting: <K extends keyof Settings>(key: K, value: Settings[K]) => void;
} | null>(null);

export const SettingsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [settings, setSettings] = useState<Settings>(() => {
    return storage.getJSON("prefrences") || defaultSettings;
  });

  const updateSetting = <K extends keyof Settings>(
    key: K,
    value: Settings[K]
  ) => {
    const updated = { ...settings, [key]: value };
    setSettings(updated);
    storage.setJSON("prefrences", updated);
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSetting }}>
      {children}
    </SettingsContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context)
    throw new Error("useSettings must be used within a SettingsProvider");
  return context;
};

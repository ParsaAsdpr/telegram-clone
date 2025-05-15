import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./core/utils/theme";
import GlobalStyle from "./components/GlobalStyles";
import Sidebar from "./components/Sidebar/Sidebar";
import { useSettings } from "./core/context/settings.context";

function App() {
  const { settings } = useSettings();

  // const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <ThemeProvider theme={settings.theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Sidebar />
    </ThemeProvider>
  );
}

export default App;

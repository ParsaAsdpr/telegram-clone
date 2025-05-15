import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./core/utils/theme";
import GlobalStyle from "./components/GlobalStyles";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <button onClick={toggleTheme}>
        Toggle to {isDarkMode ? "Light" : "Dark"} Mode
      </button>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;

import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./core/utils/theme";
import GlobalStyle from "./components/GlobalStyles";
// import Sidebar from "./components/Sidebar/Sidebar";
import { useSettings } from "./core/context/settings.context";
import Auth from "./components/Auth/Auth";
// import ChatScreen from "./components/ChatScreen/ChatScreen";

// const Container = styled.div`
//   display: flex;
//   @media screen and (max-width: 700px) {
//     width: 200vw;
//     transform: translateX(-100vw);
//   }
// `;

function App() {
  const { settings } = useSettings();

  return (
    <ThemeProvider theme={settings.theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      {/* <Container>
        <Sidebar />
        <ChatScreen />
      </Container> */}
      <Auth />
    </ThemeProvider>
  );
}

export default App;

import { createGlobalStyle } from "styled-components";
import Roboto from "../assets/fonts/Roboto-VariableFont_wdth,wght.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: url(${Roboto}) format('truetype');
    font-weight: 100 1000;
    font-style: normal;
    font-display: swap;
  }

  body {
    margin: 0;
    background: ${({ theme }) =>
      theme.bodyBackground} url(/assets/images/bg-pattern-${({ theme }) => theme.mode === "dark" ? "dark" : "light"}.png) repeat fixed center;
    background-size: 500px auto;
    color: ${({ theme }) => theme.textPrimary};
    font-family: 'Roboto';
    font-weight: normal;
    position: relative;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::before{
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: url(/assets/images/bg-gradient.png) no-repeat fixed center;
      background-size: cover;
      opacity: 0.6;
      display: ${({ theme }) => (theme.mode === "light" ? "block" : "none")};
    }
  }
`;

export default GlobalStyle;

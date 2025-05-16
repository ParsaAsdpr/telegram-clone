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
    color: ${({ theme }) => theme.textPrimary};
    font-family: 'Roboto';
    font-weight: normal;
    position: relative;
    overflow: hidden;
    height: 100vh;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyle;

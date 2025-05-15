import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: url('/assets/images/bg-pattern.png') repeat fixed center;
    background-size: 500px auto;
    background-color: ${({ theme }) => theme.bodyBackground};
    color: ${({ theme }) => theme.text};
    font-family: 'Arial', sans-serif;
    transition: all 0.25s linear;
  }
`;

export default GlobalStyle;

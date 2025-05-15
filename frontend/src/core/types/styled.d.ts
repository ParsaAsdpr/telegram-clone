import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mode: string;
    bodyBackground: string;
    background: string;
    textPrimary: string;
    textSecondary: string;
    primary: string;
    secondary: string;
  }
}

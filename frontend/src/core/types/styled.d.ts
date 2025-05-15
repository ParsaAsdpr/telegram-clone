import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bodyBackground: string;
    background: string;
    textPrimary: string;
    textSecondary: string;
    primary: string;
  }
}

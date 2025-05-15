import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bodyBackground: string;
    background: string;
    text: string;
    primary: string;
  }
}

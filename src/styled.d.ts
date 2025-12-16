import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      text: string;
      accent: string;
      headerBg: string;
      heroAccent: string;
      navMobileBg: string;
      white: string;
    };
    layout: {
      maxWidth: string;
    };
    breakpoints: {
      md: string;
      sm: string;
    };
  }
}



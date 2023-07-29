import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`${css`
  html {
    box-sizing: border-box;

    *,
    ::after,
    ::before {
      box-sizing: inherit;
    }
  }

  body {
    font-family: "Inter", sans-serif;
    background: ${({ theme }) => theme.background};
  }
`}`;

export default GlobalStyles;

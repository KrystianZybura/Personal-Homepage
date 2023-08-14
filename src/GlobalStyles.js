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
    margin: 0 auto;
    max-width: 1216px;
    font-size: 18px;
  }
`}`;

export default GlobalStyles;

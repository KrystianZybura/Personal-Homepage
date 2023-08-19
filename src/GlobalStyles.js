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
    max-width: 1232px;
    padding: 0 16px;
    font-size: 18px;
    color: ${({ theme }) => theme.font};

    @media (max-width: 767px) {
      font-size: 14px;
    }
  }
`}`;

export default GlobalStyles;

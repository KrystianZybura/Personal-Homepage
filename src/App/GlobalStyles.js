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
    background: ${({ theme }) => theme.styles.background};
    margin: 0 auto;
    max-width: 1232px;
    padding: 0 16px;
    font-size: 18px;
    color: ${({ theme }) => theme.styles.font};
    transition: background 0.5s;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 14px;
    }
  }
`}`;

export default GlobalStyles;

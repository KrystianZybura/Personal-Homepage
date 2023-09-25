import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
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
    font-size: 18px;
    color: ${({ theme }) => theme.styles.font};
    transition: background 0.5s;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 14px;
    }
  }
`;

export default GlobalStyles;

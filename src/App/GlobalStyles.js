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
    line-height: ${({ theme }) => theme.styles.lineHeight}px;
    letter-spacing:  ${({ theme }) => theme.styles.letterSpacing}px;
    color: ${({ theme }) => theme.styles.font};
    transition: background 0.5s;
    word-break: break-word;

    @media (max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
      font-size: 17px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
      font-size: 16px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
      font-size: 14px;
      line-height: 17px;
    }
  }
`;

export default GlobalStyles;

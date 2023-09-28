import { css, styled } from "styled-components";

export const StyledLink = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.styles.primary};
  }

  ${({ $email }) =>
    $email &&
    css`
      font-size: 32px;
      font-weight: 900;

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        font-size: 28px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 18px;
      }
    `}

  ${({ $tile }) =>
    $tile &&
    css`
      border-bottom: 1px solid ${({ theme }) => theme.styles.linkDecoration};
      padding-bottom: 2px;
      word-break: break-word;

      &:hover {
        filter: brightness(120%);
      }
    `}

    ${({ $buttonLink }) =>
    $buttonLink &&
    css`
      padding: 12px 16px;
      border: 1px solid ${({ theme }) => theme.styles.border};
      border-radius: 4px;
      font-weight: 600;
      font-size: 20px;
      background-color: ${({ theme }) => theme.styles.primary};
      color: ${({ theme }) => theme.styles.fontWhite};

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        font-size: 18px;
      }

      &:hover {
        color: ${({ theme }) => theme.styles.fontWhite};
        box-shadow:
          -2px -2px 0px 0px ${({ theme }) => theme.styles.buttonBoxShadow},
          2px 2px 0px 0px ${({ theme }) => theme.styles.buttonBoxShadow},
          -2px 2px 0px 0px ${({ theme }) => theme.styles.buttonBoxShadow},
          2px -2px 0px 0px ${({ theme }) => theme.styles.buttonBoxShadow};
      }
    `}

    
    ${({ $hireMe }) =>
    $hireMe &&
    css`
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      align-self: start;
      gap: 16px;

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        gap: 12px;
        align-self: center;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        align-self: start;
      }
    `}

  ${({ $emergencyLink }) =>
    $emergencyLink &&
    css`
      display: inline-block;

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        padding: 10px 14px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 16px;
        padding: 8px 12px;
      }
    `}
`;

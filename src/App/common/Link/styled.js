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
      border-bottom: 1px solid currentColor;
      justify-self: start;
      padding-bottom: 2px;

      &:hover {
        filter: brightness(120%);
      }
    `}

    ${({ $buttonLink }) =>
    $buttonLink &&
    css`
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      gap: 16px;
      max-width: 154px;
      padding: 12px 16px;
      border: 1px solid ${({ theme }) => theme.styles.border};
      border-radius: 4px;
      font-weight: 600;
      font-size: 20px;
      background-color: ${({ theme }) => theme.styles.primary};
      color: ${({ theme }) => theme.styles.fontWhite};
      text-decoration: none;

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        gap: 12px;
        font-size: 18px;
        max-width: 139px;
        align-self: center;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        gap: 12px;
        font-size: 18px;
        max-width: 139px;
        align-self: unset;
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
`;

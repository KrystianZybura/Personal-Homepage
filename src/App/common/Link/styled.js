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
`;

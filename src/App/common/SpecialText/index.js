import { css, styled } from "styled-components";

export const SpecialText = styled.span`
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.styles.fontSecondary};

  ${({ $noDisplay }) =>
    $noDisplay &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        display: none;
      }
    `}
`;

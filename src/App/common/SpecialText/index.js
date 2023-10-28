import { css, styled } from "styled-components";

export const SpecialText = styled.h2`
  font-size: 12px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.styles.fontSecondary};
  margin: 0;

  ${({ $noDisplay }) =>
    $noDisplay &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        display: none;
      }
    `}
`;

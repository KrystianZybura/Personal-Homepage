import { css, styled } from "styled-components";

export const Heading = styled.h2`
  font-size: 12px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.styles.fontSecondary};
  margin: 0;
  letter-spacing: initial;

  ${({ $noDisplay }) =>
    $noDisplay &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        display: none;
      }
    `}
`;

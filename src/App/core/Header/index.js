import { styled } from "styled-components";

export const Header = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    grid-template-columns: 1fr;
  }
`;

import { styled } from "styled-components";

export const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  place-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

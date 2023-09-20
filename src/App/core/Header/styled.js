import { styled } from "styled-components";

export const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  margin-top: 119px;
  place-items: center;

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
    margin-top: 32px;
  }
`;

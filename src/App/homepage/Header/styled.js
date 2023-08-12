import { styled } from "styled-components";

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  margin-top: 119px;
  place-items: center;
  color: ${({ theme }) => theme.font};
`;

export { StyledHeader };

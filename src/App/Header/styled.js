import { styled } from "styled-components";

const StyledHeader = styled.div`
  display: grid;
  grid-gap: 66px;
  grid-template-columns: auto 1fr;
  margin-top: 119px;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.font};
`;

export { StyledHeader };

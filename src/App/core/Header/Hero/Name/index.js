import { styled } from "styled-components";

export const Name = styled.h1`
  font-size: 38px;
  font-weight: 900;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 22px;
  }
`;

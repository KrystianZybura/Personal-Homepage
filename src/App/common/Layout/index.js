import { styled } from "styled-components";

export const Layout = styled.div`
  display: grid;
  grid-gap: 72px;
  margin: 119px auto 109px;
  max-width: 1232px;
  padding: 0 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-gap: 48px;
    margin: 32px auto 31px;
  }
`;

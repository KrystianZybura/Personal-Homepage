import { styled } from "styled-components";

export const Layout = styled.div`
  display: grid;
  grid-gap: 72px;
  margin: 119px auto 109px;
  max-width: 1240px;
  padding: 0 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    grid-gap: 60px;
    margin: 60px auto 70px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-gap: 48px;
    margin: 32px auto 31px;
  }
`;

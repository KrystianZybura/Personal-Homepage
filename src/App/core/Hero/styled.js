import { styled } from "styled-components";

export const HeroWrapper = styled.div`
  display: grid;
  grid-column-gap: 66px;
  align-items: center;
  grid-template-columns: 1fr 2fr;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-column-gap: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    place-items: center;
    grid-template-columns: 1fr;
    grid-gap: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-gap: 16px;
  }
`;

export const Image = styled.img`
  max-width: 384px;
  width: 100%;
  border-radius: 50%;
  aspect-ratio: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 132px;
    justify-self: start;
    padding: 0;
  }
`;

export const Name = styled.h1`
  font-size: 38px;
  font-weight: 900;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    font-size: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 22px;
  }
`;

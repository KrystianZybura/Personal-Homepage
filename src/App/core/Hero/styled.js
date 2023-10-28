import { styled } from "styled-components";

export const HeroWrapper = styled.div`
  display: grid;
  grid-column-gap: 66px;
  align-items: center;
  grid-template-columns: 1fr 2fr;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
    grid-column-gap: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    place-items: center;
    grid-template-columns: 1fr;
    grid-gap: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-gap: 16px;
  }
`;

export const Image = styled.img`
  max-width: 384px;
  width: 100%;
  border-radius: 50%;
  aspect-ratio: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    max-width: 132px;
    justify-self: start;
    padding: 0;
  }
`;

export const Data = styled.div`
  max-width: 633px;
  display: flex;
  flex-flow: column wrap;
  gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: 24px;
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    gap: 16px;
    text-align: unset;
  }
`;

export const Name = styled.h1`
  font-size: 38px;
  font-weight: 900;
  margin: 0;
  margin: -20px 0 3px;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
    font-size: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 30px;
    margin: -4px 0 4px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 22px;
  }
`;

export const Description = styled.p`
  margin: 0;
  font-size: 20px;
  line-height: 28px;
  color: ${({ theme }) => theme.styles.fontSecondary};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 19px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 17px;
    line-height: 24px;
  }
`;

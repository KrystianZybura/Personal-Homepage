import { keyframes, styled } from "styled-components";

export const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingWrapper = styled.div`
  display: grid;
  place-items: center;
  grid-gap: 48px;
  margin-bottom: 140px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-gap: 25px;
    margin-bottom: 80px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-gap: 20px;
    margin-bottom: 50px;
  }
`;

export const LoadingText = styled.p`
  font-size: 20px;
  color: #252525;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: unset;
  }
`;

export const LoadingAnimation = styled.div`
  width: 160px;
  height: 160px;
  border: 11px solid ${({ theme }) => theme.styles.border};
  border-top: 11px solid ${({ theme }) => theme.styles.primary};
  border-radius: 50%;
  animation:
    ${spinAnimation} 0.75s infinite,
    linear;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 110px;
    height: 110px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    border-width: 9px;
    width: 80px;
    height: 80px;
  }
`;

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
  height: 160px;
  margin: 64px 0 140px;
`;

export const LoadingText = styled.p`
  font-size: 20px;
  color: #252525;
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
`;

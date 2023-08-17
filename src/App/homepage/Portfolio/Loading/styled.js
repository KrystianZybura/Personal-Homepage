import { keyframes, styled } from "styled-components";

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const LoadingContainer = styled.div`
  display: grid;
  place-items: center;
  height: 160px;
`;

const LoadingText = styled.p`
  font-size: 20px;
  color: #252525;
`;

const LoadingAnimation = styled.div`
  width: 160px;
  height: 160px;
  border: 11px solid ${({ theme }) => theme.border};
  border-top: 11px solid ${({ theme }) => theme.primary};
  border-radius: 50%;
  animation:
    ${spinAnimation} 0.75s infinite,
    linear;
`;

export { LoadingAnimation, LoadingContainer, LoadingText };

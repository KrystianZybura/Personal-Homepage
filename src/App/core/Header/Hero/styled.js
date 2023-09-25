import { styled } from "styled-components";

export const Introduction = styled.div`
  max-width: 633px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 16px;
  }
`;

export const Image = styled.img`
  width: 400px;
  border-radius: 50%;
  aspect-ratio: 1;
  padding: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    width: 200px;
    justify-self: start;
  }
`;

export const Name = styled.h1`
  font-size: 38px;
  font-weight: 900;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 22px;
  }
`;

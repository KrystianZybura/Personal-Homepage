import { styled } from "styled-components";

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

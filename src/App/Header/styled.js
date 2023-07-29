import { styled } from "styled-components";

const Container = styled.div`
  display: grid;
  grid-gap: 66px;
  grid-template-columns: auto 1fr;
  margin-top: 119px;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.font};
`;

const Image = styled.img`
  width: 398px;
  height: 398px;
  border-radius: 50%;
  aspect-ratio: 1;
`;

const Introduction = styled.span`
  font-weight: 700;
  font-size: 12px;
`;

const StyledHeader = styled.h1`
  font-size: 38px;
  color: #000;
`;

const Description = styled.p`
  font-size: 20px;
`;

export { Container, Introduction, Image, Description, StyledHeader };

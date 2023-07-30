import { styled } from "styled-components";

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

const Title = styled.h1`
  font-size: 38px;
  color: #000;
`;

const Description = styled.p`
  font-size: 20px;
`;

export { Introduction, Image, Description, Title };

import { styled } from "styled-components";

const Container = styled.div`
  max-width: 633px;
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

const Title = styled.h1`
  font-size: 38px;
  color: #000;
  margin: 12px 0 35px;
`;

const Description = styled.p`
  font-size: 20px;
  margin-bottom: 32px;
`;

const HireEmail = styled.a`
  background-color: ${({ theme }) => theme.primary};
  color: #fff;
  text-decoration: none;
  padding: 12px 16px;
  max-width: 154px;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 16px;
  font-size: 20px;
  border-radius: 5px;
  font-weight: 600;
`;

export { Introduction, HireEmail, Image, Description, Title, Container };

import { styled } from "styled-components";

const Container = styled.div`
  max-width: 633px;
`;

const Image = styled.img`
  width: 384px;
  height: 384px;
  border-radius: 50%;
  aspect-ratio: 1;
`;

const Title = styled.h1`
  font-size: 38px;
  color: #000;
  margin: 12px 0 35px;
  font-weight: 900;
`;

const About = styled.p`
  font-size: 20px;
  margin-bottom: 32px;
  line-height: 28px;
  color: ${({ theme }) => theme.font};
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

  &:hover {
    box-shadow:
      -2px -2px 0px 0px ${({ theme }) => theme.buttonBoxShadow},
      2px 2px 0px 0px ${({ theme }) => theme.buttonBoxShadow},
      -2px 2px 0px 0px ${({ theme }) => theme.buttonBoxShadow},
      2px -2px 0px 0px ${({ theme }) => theme.buttonBoxShadow};
  }
`;

export { HireEmail, Image, About, Title, Container };

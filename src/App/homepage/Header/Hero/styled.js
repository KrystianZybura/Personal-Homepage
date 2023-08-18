import { styled } from "styled-components";

const HeroWrapper = styled.div`
  max-width: 633px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 16px;
`;

const HeroImage = styled.img`
  width: 384px;
  height: 384px;
  border-radius: 50%;
  aspect-ratio: 1;
`;

const HeroTitle = styled.h1`
  font-size: 38px;
  font-weight: 900;
  margin: 0;
`;

const HeroAbout = styled.p`
  font-size: 20px;
  line-height: 28px;
  color: ${({ theme }) => theme.fontSecondary};
`;

const HeroHire = styled.a`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 16px;
  max-width: 154px;
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 5px;
  font-weight: 600;
  font-size: 20px;
  background-color: ${({ theme }) => theme.primary};
  color: #fff;
  text-decoration: none;

  &:hover {
    box-shadow:
      -2px -2px 0px 0px ${({ theme }) => theme.buttonBoxShadow},
      2px 2px 0px 0px ${({ theme }) => theme.buttonBoxShadow},
      -2px 2px 0px 0px ${({ theme }) => theme.buttonBoxShadow},
      2px -2px 0px 0px ${({ theme }) => theme.buttonBoxShadow};
  }
`;

export { HeroHire, HeroImage, HeroAbout, HeroTitle, HeroWrapper };

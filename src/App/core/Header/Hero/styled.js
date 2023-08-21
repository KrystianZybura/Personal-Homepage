import { styled } from "styled-components";

const HeroWrapper = styled.div`
  max-width: 633px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 32px;

  @media (max-width: 767px) {
    gap: 16px;
  }
`;

const HeroImage = styled.img`
  width: 400px;
  border-radius: 50%;
  aspect-ratio: 1;
  padding: 16px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    width: 200px;
    justify-self: start;
  }
`;

const HeroTitle = styled.h1`
  font-size: 38px;
  font-weight: 900;
  margin: 0;

  @media (max-width: 767px) {
    font-size: 22px;
  }
`;

const HeroAbout = styled.p`
  font-size: 20px;
  line-height: 28px;
  margin: 0px;
  color: ${({ theme }) => theme.fontSecondary};

  @media (max-width: 767px) {
    font-size: 17px;
    line-height: 24px;
  }
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

  @media (max-width: 767px) {
    gap: 14px;
    font-size: 18px;
    max-width: 139px;
  }

  &:hover {
    box-shadow:
      -2px -2px 0px 0px ${({ theme }) => theme.buttonBoxShadow},
      2px 2px 0px 0px ${({ theme }) => theme.buttonBoxShadow},
      -2px 2px 0px 0px ${({ theme }) => theme.buttonBoxShadow},
      2px -2px 0px 0px ${({ theme }) => theme.buttonBoxShadow};
  }
`;

export { HeroHire, HeroImage, HeroAbout, HeroTitle, HeroWrapper };
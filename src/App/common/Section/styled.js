import { styled } from "styled-components";

const StyledSection = styled.section`
  background: ${({ theme }) => theme.sectionBackground};
  box-shadow:
    0px 16px 58px 0px ${({ theme }) => theme.firstBoxShadow},
    0px -2px 50px 0px ${({ theme }) => theme.secondBoxShadow};
  padding: 32px;
  margin-top: 73px;

  @media (max-width: 767px) {
    margin-top: 48px;
    padding: 16px;
  }
`;

const SectionHeader = styled.h2`
  font-size: 30px;
  font-weight: 900;
  padding-bottom: 15px;
  margin-bottom: 25px;
  border-bottom: 1px solid ${({ theme }) => theme.border};

  @media (max-width: 767px) {
    padding-bottom: 12px;
    font-size: 18px;
    margin-bottom: 25px;
  }
`;

const SectionUl = styled.ul`
  list-style-image: url("src/App/assets/ellipse.svg");
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  margin: 0;
  padding-left: 15px;
  color: ${({ theme }) => theme.fontSecondary};

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const SectionLi = styled.li`
  padding-left: 8px;
`;

export { SectionUl, SectionLi, StyledSection, SectionHeader };

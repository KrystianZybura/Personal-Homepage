import { styled } from "styled-components";

const StyledSection = styled.section`
  background: ${({ theme }) => theme.sectionBackground};
  box-shadow:
    0px 16px 58px 0px ${({ theme }) => theme.firstBoxShadow},
    0px -2px 50px 0px ${({ theme }) => theme.secondBoxShadow};
  padding: 32px;
  margin-top: 73px;
`;

const SectionHeader = styled.h2`
  font-size: 30px;
  font-weight: 900;
  padding-bottom: 15px;
  margin: 0 0 32px 0;
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

const SectionContainer = styled.div`
  color: ${({ theme }) => theme.font};
`;

const SectionUl = styled.ul`
  list-style-image: url("src/App/assets/ellipse.svg");
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 12px;
  margin: 0;
  padding-left: 15px;
`;

const SectionLi = styled.li`
  padding-left: 8px;
`;

export { SectionUl, SectionLi, StyledSection, SectionHeader, SectionContainer };

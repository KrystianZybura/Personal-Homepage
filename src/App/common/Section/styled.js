import { styled } from "styled-components";

const StyledSection = styled.section`
  background: ${({ theme }) => theme.sectionBackground};
  box-shadow: 0px 16px 58px 0px #090a3308;
  padding: 33px;
  margin-top: 73px;
`;

const SectionHeader = styled.h2`
  font-size: 30px;
  font-weight: 900;
  padding-bottom: 15px;
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

const SectionContainer = styled.div`
  color: ${({ theme }) => theme.font};
`;

const SectionUl = styled.ul`
  list-style-image: url("src/App/assets/ellipse.svg");
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const SectionLi = styled.li`
  margin: 8px;
  padding-left: 10px;
`;

export { SectionUl, SectionLi, StyledSection, SectionHeader, SectionContainer };

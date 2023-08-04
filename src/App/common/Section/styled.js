import { styled } from "styled-components";

const StyledSection = styled.section`
  background: ${({ theme }) => theme.sectionBackground};
`;

const SectionHeader = styled.h2`
  font-size: 30px;
  font-weight: 900;
  padding-bottom: 15px;
  border-bottom: 1px solid grey;
`;

const SectionContainer = styled.div`
  color: ${({ theme }) => theme.font};
  font-size: 18px;
`;

const SectionUl = styled.ul`
  list-style-image: url("ellipse.svg");
`;

const SectionLi = styled.li`
  margin: 8px;
  padding-left: 10px;
`;

export { SectionUl, SectionLi, StyledSection, SectionHeader, SectionContainer };

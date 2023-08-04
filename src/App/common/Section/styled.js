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

const SectionContainer = styled.div``;

export { StyledSection, SectionHeader, SectionContainer };

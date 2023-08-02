import { styled } from "styled-components";

const StyledSection = styled.div`
  background: ${({ theme }) => theme.sectionBackround};
`;

const SectionHeader = styled.h2`
  font-size: 30px;
  font-weight: 900;
`;

export { StyledSection, SectionHeader };

import { SectionHeader, StyledSection } from "./styled";

const Section = ({ title }) => (
  <StyledSection>
    <SectionHeader>{title}</SectionHeader>
  </StyledSection>
);

export default Section;

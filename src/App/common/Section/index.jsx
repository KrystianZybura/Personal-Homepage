import { SectionHeader, StyledSection } from "./styled";

const Section = ({ title, emote }) => (
  <StyledSection>
    <SectionHeader>
      {title} {emote}
    </SectionHeader>
  </StyledSection>
);

export default Section;

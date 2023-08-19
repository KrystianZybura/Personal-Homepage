import { SectionHeader, SectionLi, SectionUl, StyledSection } from "./styled";

const Section = ({ title, body }) => (
  <StyledSection>
    <SectionHeader>{title}</SectionHeader>
    <SectionUl>
      {body.map((skill) => (
        <SectionLi key={skill}>{skill}</SectionLi>
      ))}
    </SectionUl>
  </StyledSection>
);

export default Section;

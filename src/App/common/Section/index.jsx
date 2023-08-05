import {
  SectionContainer,
  SectionHeader,
  SectionLi,
  SectionUl,
  StyledSection,
} from "./styled";

const Section = ({ title, body }) => (
  <StyledSection>
    <SectionHeader>{title}</SectionHeader>
    <SectionContainer>
      <SectionUl>
        {body.map((skill) => (
          <SectionLi key={skill}>{skill}</SectionLi>
        ))}
      </SectionUl>
    </SectionContainer>
  </StyledSection>
);

export default Section;

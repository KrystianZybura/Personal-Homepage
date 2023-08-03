import { SectionContainer, SectionHeader, StyledSection } from "./styled";

const Section = ({ title, body }) => (
  <StyledSection>
    <SectionHeader>{title}</SectionHeader>
    <SectionContainer>
      <ul>
        {body.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </SectionContainer>
  </StyledSection>
);

export default Section;

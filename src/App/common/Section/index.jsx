import listStyleImageUrl from "../../assets/list-style.svg";
import { SectionHeader, SectionLi, SectionUl, SectionWrapper } from "./";

const Section = ({ title, body }) => (
  <SectionWrapper>
    <SectionHeader>{title}</SectionHeader>
    <SectionUl $listStyleUrl={listStyleImageUrl}>
      {body.map((skill) => (
        <SectionLi key={skill}>{skill}</SectionLi>
      ))}
    </SectionUl>
  </SectionWrapper>
);

export default Section;

import listStyleImageUrl from "../../assets/list-style.svg";
import { Item, List, SectionWrapper, Title } from "./styled";

const Section = ({ title, body }) => (
  <SectionWrapper>
    <Title>{title}</Title>
    <List $listStyleUrl={listStyleImageUrl}>
      {body.map((skill) => (
        <Item key={skill}>{skill}</Item>
      ))}
    </List>
  </SectionWrapper>
);

export default Section;

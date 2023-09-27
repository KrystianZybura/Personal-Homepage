import listStyleImageUrl from "../../assets/list-style.svg";
import { Title } from "../Title";
import { Item, List, SectionWrapper } from "./styled";

const Section = ({ title, body }) => (
  <SectionWrapper>
    <Title $section>{title}</Title>
    <List $listStyleUrl={listStyleImageUrl}>
      {body.map((skill) => (
        <Item key={skill}>{skill}</Item>
      ))}
    </List>
  </SectionWrapper>
);

export default Section;

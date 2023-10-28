import { Title } from "../Title";
import listStyleImageUrl from "./list-style-image.svg";
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

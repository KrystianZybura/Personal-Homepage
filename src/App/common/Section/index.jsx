import { Title } from "../Title";
import { Bullet, Item, List, SectionWrapper } from "./styled";

const Section = ({ title, body }) => (
  <SectionWrapper>
    <Title $section>{title}</Title>
    <List>
      {body.map((skill) => (
        <Item key={skill}>
          <Bullet />
          {skill}
        </Item>
      ))}
    </List>
  </SectionWrapper>
);

export default Section;

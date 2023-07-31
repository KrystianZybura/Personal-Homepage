import { SpecialText } from "../../common/SpecialText";
import { Container, Description, HireEmail, Image, Title } from "./styled";

const About = ({ name }) => (
  <>
    <Image src="/image.png" alt={name} />
    <Container>
        <SpecialText>This is</SpecialText>
      <Title>{name}</Title>
      <Description>
        👌💻 I am a passionate Frontend Developer in love with react, currently
        looking for new job opportunities.
      </Description>
      <HireEmail href="mailto:zybura.dev@gmail.com">
        <img src="/message.svg" alt="message icon" />
        Hire Me
      </HireEmail>
    </Container>
  </>
);

export default About;

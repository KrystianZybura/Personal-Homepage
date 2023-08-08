import { SpecialText } from "../../../common/SpecialText";
import { About, Container, HireEmail, Image, Title } from "./styled";

const Hero = ({ name }) => (
  <>
    <Image src="/image.png" alt={`Photo of ${name}`} />
    <Container>
      <SpecialText>This is</SpecialText>
      <Title>{name}</Title>
      <About>
        👌💻 I am a passionate Frontend Developer in love with react, currently
        looking for new job opportunities.
      </About>
      <HireEmail href="mailto:zybura.dev@gmail.com">
        <img src="/message.svg" alt="message icon" />
        Hire Me
      </HireEmail>
    </Container>
  </>
);

export default Hero;

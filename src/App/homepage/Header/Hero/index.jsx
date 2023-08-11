import { ReactComponent as MessageIcon } from "../../../assets/message.svg";
import { SpecialText } from "../../../common/SpecialText";
import { About, Container, HireEmail, Image, Title } from "./styled";

const Hero = ({ name }) => (
  <>
    <Image src="src/App/assets/image.png" alt={`Photo of ${name}`} />
    <Container>
      <SpecialText>This is</SpecialText>
      <Title>{name}</Title>
      <About>
        👌💻 I am a passionate Frontend Developer in love with react, currently
        looking for new job opportunities.
      </About>
      <HireEmail href="mailto:zybura.dev@gmail.com">
        <MessageIcon />
        Hire Me
      </HireEmail>
    </Container>
  </>
);

export default Hero;

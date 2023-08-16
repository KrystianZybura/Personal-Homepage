import { ReactComponent as EmailIcon } from "../../../assets/email-icon.svg";
import { Initiation } from "../../../common/Initiation";
import {
  HeroAbout,
  HeroContainer,
  HeroHire,
  HeroImage,
  HeroTitle,
} from "./styled";

const Hero = ({ name }) => (
  <>
    <HeroImage src="src/App/assets/image.png" alt={`Photo of ${name}`} />
    <HeroContainer>
      <Initiation>This is</Initiation>
      <HeroTitle>{name}</HeroTitle>
      <HeroAbout>
        👌💻 I am a passionate Frontend Developer in love with react, currently
        looking for new job opportunities.
      </HeroAbout>
      <HeroHire href="mailto:zybura.dev@gmail.com">
        <EmailIcon />
        Hire Me
      </HeroHire>
    </HeroContainer>
  </>
);

export default Hero;

import { ReactComponent as EmailIcon } from "../../../assets/email-icon.svg";
import { Initiation } from "../../../common/Initiation";
import {
  HeroAbout,
  HeroHire,
  HeroImage,
  HeroTitle,
  HeroWrapper,
} from "./styled";

const Hero = ({ name }) => (
  <>
    <HeroImage src="src/App/assets/hero.png" alt={`Photo of ${name}`} />
    <HeroWrapper>
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
    </HeroWrapper>
  </>
);

export default Hero;

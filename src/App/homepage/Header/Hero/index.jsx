import { ReactComponent as EmailIcon } from "../../../assets/email-icon.svg";
import { SpecialText } from "../../../common/SpecialText";
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
      <SpecialText>This is</SpecialText>
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

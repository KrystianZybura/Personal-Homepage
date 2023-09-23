import { ReactComponent as EmailIcon } from "../../../assets/email-icon.svg";
import heroImageUrl from "../../../assets/hero.png";
import { Initiation } from "../../../common/Initiation";
import {
  HeroAbout,
  HeroHire,
  HeroImage,
  HeroIntroduction,
  HeroTitle,
} from "./styled";

const Hero = ({ name }) => (
  <>
    <HeroImage src={heroImageUrl} alt={`Photo of ${name}`} />
    <HeroIntroduction>
      <Initiation>This is</Initiation>
      <HeroTitle>{name}</HeroTitle>
      <HeroAbout>
        👌💻 I am a passionate Frontend Developer in love with React, currently
        looking for new job opportunities.
      </HeroAbout>
      <HeroHire href="mailto:zybura.dev@gmail.com">
        <EmailIcon />
        Hire Me
      </HeroHire>
    </HeroIntroduction>
  </>
);

export default Hero;

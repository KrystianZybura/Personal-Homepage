import ButtonLink from "../../common/ButtonLink";
import { Heading } from "../../common/Heading";
import { email } from "../../common/email";
import { HERO_ABOUT } from "../../common/textConstants";
import { ReactComponent as EmailIcon } from "./emailIcon.svg";
import heroImageUrl from "./heroImage.png";
import { Data, Description, HeroWrapper, Image, Name } from "./styled";

const Hero = ({ name, heading }) => (
  <HeroWrapper>
    <Image src={heroImageUrl} alt={`Photo of ${name}`} />
    <Data>
      <Heading>{heading}</Heading>
      <Name>{name}</Name>
      <Description>{HERO_ABOUT}</Description>
      <ButtonLink hireMe href={`mailto:${email}`}>
        <EmailIcon />
        Hire Me
      </ButtonLink>
    </Data>
  </HeroWrapper>
);

export default Hero;

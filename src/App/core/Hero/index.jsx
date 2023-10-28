import { Heading } from "../../common/Heading";
import { HERO_ABOUT } from "../../common/textConstants";
import HireMe from "./HireMe";
import heroImageUrl from "./hero.png";
import { Data, Description, HeroWrapper, Image, Name } from "./styled";

const Hero = ({ name, heading }) => (
  <HeroWrapper>
    <Image src={heroImageUrl} alt={`Photo of ${name}`} />
    <Data>
      <Heading>{heading}</Heading>
      <Name>{name}</Name>
      <Description>{HERO_ABOUT}</Description>
      <HireMe />
    </Data>
  </HeroWrapper>
);

export default Hero;

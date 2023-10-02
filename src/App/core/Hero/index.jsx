import EnhancedData from "../../common/EnhancedData";
import { HERO_ABOUT } from "../../common/textConstants";
import HireMe from "./HireMe";
import heroImageUrl from "./hero.png";
import { HeroWrapper, Image, Name } from "./styled";

const Hero = ({ name, heading }) => (
  <HeroWrapper>
    <Image src={heroImageUrl} alt={`Photo of ${name}`} />
    <EnhancedData
      heading={heading}
      title={<Name>{name}</Name>}
      description={HERO_ABOUT}
      socials={<HireMe />}
      hero
    />
  </HeroWrapper>
);

export default Hero;

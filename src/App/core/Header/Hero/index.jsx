import heroImageUrl from "../../../assets/hero.png";
import EnhancedData from "../../../common/EnhancedData";
import HireMe from "./HireMe";
import { Name } from "./Name";
import { about } from "./about";
import { HeroImage, HeroIntroduction } from "./styled";

const Hero = ({ name, heading }) => (
  <>
    <HeroImage src={heroImageUrl} alt={`Photo of ${name}`} />
    <HeroIntroduction>
      <EnhancedData
        heading={heading}
        title={<Name>{name}</Name>}
        description={about}
        socials={<HireMe />}
      />
    </HeroIntroduction>
  </>
);

export default Hero;

import heroImageUrl from "../../../assets/hero.png";
import EnhancedData from "../../../common/EnhancedData";
import HireMe from "./HireMe";
import { Name } from "./Name";
import { about } from "./about";
import { HeroImage, HeroIntroduction } from "./styled";

const Hero = ({ name }) => (
  <>
    <HeroImage src={heroImageUrl} alt={`Photo of ${name}`} />
    <HeroIntroduction>
      <EnhancedData
        heading="This is"
        title={<Name>{name}</Name>}
        description={about}
        socials={<HireMe />}
      />
    </HeroIntroduction>
  </>
);

export default Hero;

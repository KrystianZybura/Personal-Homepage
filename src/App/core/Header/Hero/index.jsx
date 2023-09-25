import heroImageUrl from "../../../assets/hero.png";
import EnhancedData from "../../../common/EnhancedData";
import HireMe from "./HireMe";
import { about } from "./about";
import { Image, Introduction, Name } from "./styled";

const Hero = ({ name, heading }) => (
  <>
    <Image src={heroImageUrl} alt={`Photo of ${name}`} />
    <Introduction>
      <EnhancedData
        heading={heading}
        title={<Name>{name}</Name>}
        description={about}
        socials={<HireMe />}
      />
    </Introduction>
  </>
);

export default Hero;

import Link from "../../../common/Link";
import {
  FacebookIcon,
  GithubIcon,
  LinkedInIcon,
  SocialsWrapper,
} from "./styled";

const Socials = () => (
  <SocialsWrapper>
    <Link href="https://github.com/KrystianZybura">
      <GithubIcon />
    </Link>
    <Link href="https://www.facebook.com/168299279807k">
      <FacebookIcon />
    </Link>
    <Link href="https://www.linkedin.com/in/krystian-żybura-062929288/">
      <LinkedInIcon />
    </Link>
  </SocialsWrapper>
);

export default Socials;

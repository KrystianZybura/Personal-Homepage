import { Initiation } from "../../common/Initiation";
import FooterLink from "./FooterLink";
import {
  FacebookIcon,
  FooterDescription,
  FooterEmail,
  FooterSocialIcons,
  GithubIcon,
  LinkedInIcon,
  StyledFooter,
} from "./styled";

const Footer = () => (
  <StyledFooter>
    <Initiation>Lets talk!</Initiation>
    <FooterEmail href="mailto:zybura.dev@gmail.com">
      zybura.dev@gmail.com
    </FooterEmail>
    <FooterDescription>
      {`I'm always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas com to life, feel free to contact me ✌`}
    </FooterDescription>
    <FooterSocialIcons>
      <FooterLink href="https://github.com/KrystianZybura">
        <GithubIcon />
      </FooterLink>
      <FooterLink href="https://www.facebook.com/168299279807k">
        <FacebookIcon />
      </FooterLink>
      <FooterLink href="https://www.linkedin.com/in/krystian-żybura-062929288/">
        <LinkedInIcon />
      </FooterLink>
    </FooterSocialIcons>
  </StyledFooter>
);
export default Footer;

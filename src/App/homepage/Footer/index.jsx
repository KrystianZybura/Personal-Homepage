import { Initiation } from "../../common/Initiation";
import {
  FacebookIcon,
  FooterDescription,
  FooterEmail,
  FooterLink,
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
      <FooterLink
        rel="no-referrer"
        target="_blank"
        href="https://github.com/KrystianZybura"
      >
        <GithubIcon />
      </FooterLink>
      <FooterLink
        rel="no-referrer"
        target="_blank"
        href="https://www.facebook.com/168299279807k"
      >
        <FacebookIcon />
      </FooterLink>
      <FooterLink
        rel="no-referrer"
        target="_blank"
        href="https://www.linkedin.com/in/krystian-żybura-062929288/"
      >
        <LinkedInIcon />
      </FooterLink>
    </FooterSocialIcons>
  </StyledFooter>
);
export default Footer;

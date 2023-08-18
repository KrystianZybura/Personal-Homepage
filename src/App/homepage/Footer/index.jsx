import { ReactComponent as Facebook } from "../../assets/facebook.svg";
import { ReactComponent as Github } from "../../assets/github.svg";
import { ReactComponent as LinkedIn } from "../../assets/linkedIn.svg";
import { Initiation } from "../../common/Initiation";
import {
  FooterDescription,
  FooterEmail,
  FooterSocialIcons,
  IconContainer,
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
      <IconContainer
        rel="no-referrer"
        target="_blank"
        href="https://github.com/KrystianZybura"
      >
        <Github />
      </IconContainer>
      <IconContainer
        rel="no-referrer"
        target="_blank"
        href="https://www.facebook.com/168299279807k"
      >
        <Facebook />
      </IconContainer>
      <IconContainer
        rel="no-referrer"
        target="_blank"
        href="https://www.linkedin.com/in/krystian-żybura-062929288/"
      >
        <LinkedIn />
      </IconContainer>
    </FooterSocialIcons>
  </StyledFooter>
);
export default Footer;

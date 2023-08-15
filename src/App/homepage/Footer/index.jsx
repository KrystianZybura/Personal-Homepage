import { ReactComponent as Facebook } from "../../assets/facebook.svg";
import { ReactComponent as Github } from "../../assets/github.svg";
import { ReactComponent as LinkedIn } from "../../assets/linkedIn.svg";
import { SpecialText } from "../../common/SpecialText";
import {
  FooterDescription,
  FooterEmail,
  FooterSocialIcons,
  IconContainer,
  StyledFooter,
} from "./styled";

const Footer = () => (
  <StyledFooter>
    <SpecialText>Lets talk!</SpecialText>
    <FooterEmail>zybura.dev@gmail.com</FooterEmail>
    <FooterDescription>
      {`I'm always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas com to life, feel free to contact me ✌`}
    </FooterDescription>
    <FooterSocialIcons>
      <IconContainer href="https://github.com/KrystianZybura">
        <Github />
      </IconContainer>
      <IconContainer href="https://www.facebook.com/168299279807k">
        <Facebook />
      </IconContainer>
      <IconContainer href="https://www.linkedin.com/in/krystian-żybura-062929288/">
        <LinkedIn />
      </IconContainer>
    </FooterSocialIcons>
  </StyledFooter>
);
export default Footer;

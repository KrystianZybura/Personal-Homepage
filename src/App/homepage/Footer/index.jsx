import { ReactComponent as Facebook } from "../../assets/facebook.svg";
import { ReactComponent as Github } from "../../assets/github.svg";
import { ReactComponent as LinkedIn } from "../../assets/linkedIn.svg";
import { SpecialText } from "../../common/SpecialText";
import {
  FooterDescription,
  FooterSocialIcons,
  FooterTitle,
  StyledFooter,
} from "./styled";

const Footer = () => (
  <StyledFooter>
    <SpecialText>Lets talk!</SpecialText>
    <FooterTitle>zybura.dev@gmail.com</FooterTitle>
    <FooterDescription>
      {`I'm always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas com to life, feel free to contact me ✌`}
    </FooterDescription>
    <FooterSocialIcons>
      <Github />
      <Facebook />
      <LinkedIn />
    </FooterSocialIcons>
  </StyledFooter>
);
export default Footer;

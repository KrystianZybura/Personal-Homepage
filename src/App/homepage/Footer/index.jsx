import { SpecialText } from "../../common/SpecialText";
import { FooterDescription, FooterTitle, StyledFooter } from "./styled";

const Footer = () => (
  <StyledFooter>
    <SpecialText>Lets talk!</SpecialText>
    <FooterTitle>zybura.dev@gmail.com</FooterTitle>
    <FooterDescription>
      {`I'm always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas com to life, feel free to contact me ✌`}
    </FooterDescription>
  </StyledFooter>
);
export default Footer;

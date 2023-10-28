import { Heading } from "../../common/Heading";
import { FOOTER_DESCRIPTION } from "../../common/textConstants";
import Email from "./Email";
import Socials from "./Socials";
import { Description, FooterWrapper } from "./styled";

const Footer = ({ heading }) => (
  <FooterWrapper>
    <Heading>{heading}</Heading>
    <Email />
    <Description>{FOOTER_DESCRIPTION}</Description>
    <Socials />
  </FooterWrapper>
);

export default Footer;

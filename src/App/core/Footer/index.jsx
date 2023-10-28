import { Heading } from "../../common/Heading";
import Link from "../../common/Link";
import { email } from "../../common/email";
import { FOOTER_DESCRIPTION } from "../../common/textConstants";
import Socials from "./Socials";
import { Description, FooterWrapper } from "./styled";

const Footer = ({ heading }) => (
  <FooterWrapper>
    <Heading>{heading}</Heading>
    <Link email href={`mailto:${email}`}>
      {email}
    </Link>
    <Description>{FOOTER_DESCRIPTION}</Description>
    <Socials />
  </FooterWrapper>
);

export default Footer;

import EnhancedData from "../../common/EnhancedData";
import { FOOTER_DESCRIPTION } from "../../common/textConstants";
import Email from "./Email";
import Socials from "./Socials";

const Footer = ({ heading }) => (
  <EnhancedData
    heading={heading}
    title={<Email />}
    description={FOOTER_DESCRIPTION}
    socials={<Socials />}
    footer
  />
);

export default Footer;

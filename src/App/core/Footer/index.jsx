import EnhancedData from "../../common/EnhancedData";
import Email from "./Email";
import Socials from "./Socials";
import { description } from "./description";

const Footer = ({ heading }) => (
  <EnhancedData
    heading={heading}
    title={<Email />}
    description={description}
    socials={<Socials />}
    footer
  />
);

export default Footer;

import EnhancedData from "../../common/EnhancedData";
import Email from "./Email";
import Socials from "./Socials";
import { description } from "./description";
import { StyledFooter } from "./styled";

const Footer = ({ heading }) => (
  <StyledFooter>
    <EnhancedData
      heading={heading}
      title={<Email />}
      description={description}
      socials={<Socials />}
      footer
    />
  </StyledFooter>
);

export default Footer;

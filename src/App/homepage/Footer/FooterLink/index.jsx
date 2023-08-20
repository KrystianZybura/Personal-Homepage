import { StyledFooterLink } from "./styled";

const FooterLink = ({ href, children }) => (
  <StyledFooterLink rel="no-referrer" target="_blank" href={href}>
    {children}
  </StyledFooterLink>
);

export default FooterLink;

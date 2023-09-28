import { StyledLink } from "./styled";

const Link = ({ href, email, children }) => (
  <StyledLink $email={email} rel="no-referrer" target="_blank" href={href}>
    {children}
  </StyledLink>
);

export default Link;

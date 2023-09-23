import { StyledLink } from "./styled";

const Link = ({ href, children }) => (
  <StyledLink rel="no-referrer" target="_blank" href={href}>
    {children}
  </StyledLink>
);

export default Link;

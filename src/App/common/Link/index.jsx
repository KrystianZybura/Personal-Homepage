import { StyledLink } from "./styled";

const Link = ({ href, email, tile, children }) => (
  <StyledLink
    $email={email}
    $tile={tile}
    rel="no-referrer"
    target="_blank"
    href={href}
  >
    {children}
  </StyledLink>
);

export default Link;

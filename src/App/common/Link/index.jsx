import { StyledLink } from "./styled";

const Link = ({ href, email, tile, children, title }) => (
  <StyledLink
    $email={email}
    $tile={tile}
    title={title}
    rel="no-referrer"
    target="_blank"
    href={href}
  >
    {children}
  </StyledLink>
);

export default Link;

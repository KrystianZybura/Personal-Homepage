import { StyledLink } from "./styled";

const Link = ({ href, email, tile, buttonLink, children }) => (
  <StyledLink
    $email={email}
    $tile={tile}
    $buttonLink={buttonLink}
    rel="no-referrer"
    target="_blank"
    href={href}
  >
    {children}
  </StyledLink>
);

export default Link;

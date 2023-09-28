import { StyledLink } from "./styled";

const Link = ({
  href,
  email,
  tile,
  buttonLink,
  hireMe,
  emergencyLink,
  children,
}) => (
  <StyledLink
    $email={email}
    $tile={tile}
    $buttonLink={buttonLink}
    $hireMe={hireMe}
    $emergencyLink={emergencyLink}
    rel="no-referrer"
    target="_blank"
    href={href}
  >
    {children}
  </StyledLink>
);

export default Link;

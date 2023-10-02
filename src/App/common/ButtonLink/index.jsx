import { StyledButtonLink } from "./styled";

const ButtonLink = ({ href, hireMe, emergencyLink, children }) => (
  <StyledButtonLink
    $hireMe={hireMe}
    $emergencyLink={emergencyLink}
    rel="no-referrer"
    target="_blank"
    href={href}
  >
    {children}
  </StyledButtonLink>
);

export default ButtonLink;

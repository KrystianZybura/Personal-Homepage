import { StyledButtonLink } from "./styled";

const ButtonLink = ({ href, hireMe, emergencyLink, children, title }) => (
  <StyledButtonLink
    $hireMe={hireMe}
    $emergencyLink={emergencyLink}
    title={title}
    rel="no-referrer"
    target="_blank"
    href={href}
  >
    {children}
  </StyledButtonLink>
);

export default ButtonLink;

import { StyledLink } from "./styled";

const Link = ({ href }) => (
  <StyledLink rel="no-referrer" target="_blank" href={href} />
);

export default Link;

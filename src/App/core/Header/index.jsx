import Hero from "./Hero";
import SwitchTheme from "./SwitchTheme";
import { StyledHeader } from "./styled";

const Header = ({ name, heading }) => (
  <StyledHeader>
    <Hero name={name} heading={heading} />
    <SwitchTheme />
  </StyledHeader>
);

export default Header;

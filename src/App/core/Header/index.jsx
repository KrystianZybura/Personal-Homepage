import Hero from "./Hero";
import SwitchTheme from "./SwitchTheme";
import { StyledHeader } from "./styled";

const Header = () => (
  <StyledHeader>
    <Hero name={"Krystian Żybura"} />
    <SwitchTheme />
  </StyledHeader>
);

export default Header;

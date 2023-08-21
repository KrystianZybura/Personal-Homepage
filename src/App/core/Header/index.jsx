import Hero from "./Hero";
import ToggleTheme from "./ToggleTheme";
import { StyledHeader } from "./styled";

const Header = () => (
  <StyledHeader>
    <Hero name={"Krystian Żybura"} />
    <ToggleTheme />
  </StyledHeader>
);

export default Header;

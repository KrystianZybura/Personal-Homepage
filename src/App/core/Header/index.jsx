import Hero from "./Hero";
import ToggleTheme from "./ToggleTheme";
import { StyledHeader } from "./styled";

const Header = ({ toggleDark }) => (
  <StyledHeader>
    <Hero name={"Krystian Żybura"} />
    <ToggleTheme toggleDark={toggleDark} />
  </StyledHeader>
);

export default Header;

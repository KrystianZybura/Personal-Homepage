import { StyledHeader } from "./styled";

const Header = ({ hero, toggleTheme }) => (
  <StyledHeader>
    {hero}
    {toggleTheme}
  </StyledHeader>
);

export default Header;

import { StyledHeader } from "./styled";

const Header = ({ about, toggleTheme }) => (
  <StyledHeader>
    {about}
    {toggleTheme}
  </StyledHeader>
);

export default Header;

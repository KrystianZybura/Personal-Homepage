import { useContext } from "react";

import { ThemeContext, ThemeUpdateContext } from "../../../ThemeStatus";
import { SpecialText } from "../../common/SpecialText";
import {
  IconWrapper,
  StyledDarkModeIcon,
  StyledLightModeIcon,
  SwitchThemeButton,
  SwitchThemeContainer,
} from "./styled";

const SwitchTheme = () => {
  const darkTheme = useContext(ThemeContext);
  const toggleTheme = useContext(ThemeUpdateContext);

  return (
    <SwitchThemeContainer>
      <SpecialText $noDisplay>Dark mode {darkTheme ? "on" : "off"}</SpecialText>
      <SwitchThemeButton onClick={() => toggleTheme()}>
        <IconWrapper $moveToRight={darkTheme}>
          {darkTheme ? <StyledDarkModeIcon /> : <StyledLightModeIcon />}
        </IconWrapper>
      </SwitchThemeButton>
    </SwitchThemeContainer>
  );
};

export default SwitchTheme;

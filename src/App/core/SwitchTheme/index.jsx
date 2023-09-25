import { useContext } from "react";

import { ThemeContext, ThemeUpdateContext } from "../../../ThemeStatus";
import { ReactComponent as DarkThemeIcon } from "../../assets/dark.svg";
import { ReactComponent as LightThemeIcon } from "../../assets/light.svg";
import EnhancedData from "../../common/EnhancedData";
import { SwitchThemeButton, SwitchThemeContainer } from "./styled";

const SwitchTheme = () => {
  const darkTheme = useContext(ThemeContext);
  const toggleTheme = useContext(ThemeUpdateContext);

  return (
    <SwitchThemeContainer>
      <EnhancedData heading={`Dark mode ${darkTheme ? "on" : "off"}`} />
      <SwitchThemeButton onClick={() => toggleTheme()}>
        {darkTheme ? <DarkThemeIcon /> : <LightThemeIcon />}
      </SwitchThemeButton>
    </SwitchThemeContainer>
  );
};

export default SwitchTheme;

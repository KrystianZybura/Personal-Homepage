import { useContext } from "react";

import { ThemeContext, ThemeUpdateContext } from "../../../ThemeStatus";
import { ReactComponent as DarkThemeIcon } from "../../assets/dark.svg";
import { ReactComponent as LightThemeIcon } from "../../assets/light.svg";
import { Heading } from "../../common/Heading";
import { SwitchThemeButton, SwitchThemeContainer } from "./styled";

const SwitchTheme = () => {
  const darkTheme = useContext(ThemeContext);
  const toggleTheme = useContext(ThemeUpdateContext);

  return (
    <SwitchThemeContainer>
      <Heading>Dark mode {darkTheme ? "on" : "off"}</Heading>
      <SwitchThemeButton onClick={() => toggleTheme()}>
        {darkTheme ? <DarkThemeIcon /> : <LightThemeIcon />}
      </SwitchThemeButton>
    </SwitchThemeContainer>
  );
};

export default SwitchTheme;

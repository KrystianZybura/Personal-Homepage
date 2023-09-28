import { useContext } from "react";
import { useMediaQuery } from "react-responsive";

import { ThemeContext, ThemeUpdateContext } from "../../../ThemeStatus";
import { Heading } from "../../common/Heading";
import { ReactComponent as DarkThemeIcon } from "./dark.svg";
import { ReactComponent as LightThemeIcon } from "./light.svg";
import { SwitchThemeButton, SwitchThemeContainer } from "./styled";

const SwitchTheme = () => {
  const darkTheme = useContext(ThemeContext);
  const toggleTheme = useContext(ThemeUpdateContext);

  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <SwitchThemeContainer>
      <Heading>
        {isMobile ? "" : `Dark mode ${darkTheme ? "on" : "off"}`}
      </Heading>
      <SwitchThemeButton onClick={() => toggleTheme()}>
        {darkTheme ? <DarkThemeIcon /> : <LightThemeIcon />}
      </SwitchThemeButton>
    </SwitchThemeContainer>
  );
};

export default SwitchTheme;

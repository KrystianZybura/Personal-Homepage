import { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import { useTheme } from "styled-components";

import { ThemeContext, ThemeUpdateContext } from "../../../ThemeStatus";
import { Heading } from "../../common/Heading";
import { ReactComponent as DarkThemeIcon } from "./dark.svg";
import { ReactComponent as LightThemeIcon } from "./light.svg";
import { SwitchThemeButton, SwitchThemeContainer } from "./styled";

const SwitchTheme = () => {
  const darkTheme = useContext(ThemeContext);
  const toggleTheme = useContext(ThemeUpdateContext);

  const theme = useTheme();

  const isMedia = useMediaQuery({
    maxWidth: theme.breakpoints.tablet,
  });

  return (
    <SwitchThemeContainer>
      <Heading>
        {isMedia ? "" : `Dark mode ${darkTheme ? "on" : "off"}`}
      </Heading>
      <SwitchThemeButton onClick={() => toggleTheme()}>
        {darkTheme ? <DarkThemeIcon /> : <LightThemeIcon />}
      </SwitchThemeButton>
    </SwitchThemeContainer>
  );
};

export default SwitchTheme;

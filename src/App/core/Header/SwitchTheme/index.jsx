import { useState } from "react";

import { ReactComponent as DarkThemeIcon } from "../../../assets/dark.svg";
import { ReactComponent as LightThemeIcon } from "../../../assets/light.svg";
import { Initiation } from "../../../common/Initiation";
import { SwitchThemeButton, SwitchThemeContainer } from "./styled";

const SwitchTheme = ({ SwitchDark }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const darkThemeHandler = () => {
    SwitchDark();
    setDarkTheme((darkTheme) => !darkTheme);
  };

  return (
    <SwitchThemeContainer>
      <Initiation>{`Dark mode off`}</Initiation>
      <SwitchThemeButton onClick={() => darkThemeHandler()}>
        {darkTheme ? <DarkThemeIcon /> : <LightThemeIcon />}
      </SwitchThemeButton>
    </SwitchThemeContainer>
  );
};

export default SwitchTheme;

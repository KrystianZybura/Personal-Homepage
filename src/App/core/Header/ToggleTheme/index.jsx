import { useState } from "react";

import { ReactComponent as DarkThemeIcon } from "../../../assets/dark.svg";
import { ReactComponent as LightThemeIcon } from "../../../assets/light.svg";
import { Initiation } from "../../../common/Initiation";
import { ToggleThemeButton, ToggleThemeContainer } from "./styled";

const ToggleTheme = ({ toggleDark }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const darkThemeHandler = () => {
    toggleDark();
    setDarkTheme((darkTheme) => !darkTheme);
  };

  return (
    <ToggleThemeContainer>
      <Initiation>{`Dark mode off`}</Initiation>
      <ToggleThemeButton onClick={() => darkThemeHandler()}>
        {darkTheme ? <DarkThemeIcon /> : <LightThemeIcon />}
      </ToggleThemeButton>
    </ToggleThemeContainer>
  );
};

export default ToggleTheme;

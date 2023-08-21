import { useState } from "react";

import { ReactComponent as DarkThemeIcon } from "../../../assets/dark.svg";
import { ReactComponent as LightThemeIcon } from "../../../assets/light.svg";
import { Initiation } from "../../../common/Initiation";
import { ToggleThemeButton, ToggleThemeContainer } from "./styled";

const ToggleTheme = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <ToggleThemeContainer>
      <Initiation>{`Dark mode off`}</Initiation>
      <ToggleThemeButton
        onClick={() => setDarkTheme((darkTheme) => !darkTheme)}
      >
        {darkTheme ? <DarkThemeIcon /> : <LightThemeIcon />}
      </ToggleThemeButton>
    </ToggleThemeContainer>
  );
};

export default ToggleTheme;

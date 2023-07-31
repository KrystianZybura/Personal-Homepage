import { useState } from "react";

import { SpecialText } from "../../common/SpecialText";
import { ToggleThemeButton, ToggleThemeContainer } from "./styled";

const ToggleTheme = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <ToggleThemeContainer>
      <SpecialText>{`Dark mode off`}</SpecialText>
      <ToggleThemeButton
        onClick={() => setDarkTheme((darkTheme) => !darkTheme)}
      >
        <img
          src={`/${darkTheme ? "dark" : "light"}.svg`}
          alt="toggle theme button"
        />
      </ToggleThemeButton>
    </ToggleThemeContainer>
  );
};

export default ToggleTheme;

import { useContext } from "react";

import { ThemeContext, ThemeUpdateContext } from "../../../ThemeStatus";
import { SpecialText } from "../../common/SpecialText";
import { Box, Button, IconWrapper, SunIcon } from "./styled";

const SwitchTheme = () => {
  const darkTheme = useContext(ThemeContext);
  const toggleTheme = useContext(ThemeUpdateContext);

  return (
    <Button onClick={() => toggleTheme()}>
      <SpecialText $noDisplay>Dark mode {darkTheme ? "on" : "off"}</SpecialText>
      <Box>
        <IconWrapper $moveToRight={darkTheme}>
          <SunIcon />
        </IconWrapper>
      </Box>
    </Button>
  );
};

export default SwitchTheme;

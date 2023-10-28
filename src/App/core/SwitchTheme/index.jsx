import { useContext } from "react";

import { ThemeContext, ThemeUpdateContext } from "../../../ThemeStatus";
import { Box, Button, IconWrapper, SunIcon, Text } from "./styled";

const SwitchTheme = () => {
  const darkTheme = useContext(ThemeContext);
  const toggleTheme = useContext(ThemeUpdateContext);

  return (
    <Button onClick={() => toggleTheme()}>
      <Text>Dark mode {darkTheme ? "on" : "off"}</Text>
      <Box>
        <IconWrapper $moveToRight={darkTheme}>
          <SunIcon />
        </IconWrapper>
      </Box>
    </Button>
  );
};

export default SwitchTheme;

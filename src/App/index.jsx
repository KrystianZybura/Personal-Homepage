import { useState } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./GlobalStyles.js";
import PersonalHomepage from "./core";
import { getTheme } from "./getTheme.js";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleDarkTheme = () => setDarkTheme((darkTheme) => !darkTheme);

  const theme = getTheme(darkTheme ? darkTheme : false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <PersonalHomepage toggleDark={toggleDarkTheme} />
    </ThemeProvider>
  );
};

export default App;

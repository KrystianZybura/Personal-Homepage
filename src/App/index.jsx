import { useState } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./GlobalStyles.js";
import PersonalHomepage from "./core";
import { theme } from "./theme.js";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleDarkTheme = () => setDarkTheme((darkTheme) => !darkTheme);

  return (
    <ThemeProvider theme={darkTheme ? theme.dark : theme.light}>
      <GlobalStyles />
      <PersonalHomepage toggleDark={toggleDarkTheme} />
    </ThemeProvider>
  );
};

export default App;

import { ThemeProvider } from "styled-components";

import GlobalStyles from "./GlobalStyles.js";
import PersonalHomepage from "./core";
import { useTheme } from "./useTheme.js";

const App = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <PersonalHomepage />
    </ThemeProvider>
  );
};

export default App;

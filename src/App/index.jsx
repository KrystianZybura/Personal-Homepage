import { ThemeProvider } from "styled-components";

import GlobalStyles from "./GlobalStyles.js";
import PersonalHomepage from "./core";
import { theme } from "./theme.js";

const App = () => (
  <ThemeProvider theme={theme.light}>
    <GlobalStyles />
    <PersonalHomepage />
  </ThemeProvider>
);

export default App;

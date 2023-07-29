import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import App from "./App/index.jsx";
import GlobalStyles from "./GlobalStyles.js";
import { theme } from "./theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme.light}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import ThemeStatus from "./ThemeStatus";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeStatus>
      <App />
    </ThemeStatus>
  </React.StrictMode>,
);

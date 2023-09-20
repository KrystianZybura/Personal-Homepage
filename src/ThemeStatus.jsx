import React, { useState } from "react";

export const ThemeContext = React.createContext();
export const ThemeUpdateContext = React.createContext();

const ThemeStatus = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => setDarkTheme((darkTheme) => !darkTheme);

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};

export default ThemeStatus;

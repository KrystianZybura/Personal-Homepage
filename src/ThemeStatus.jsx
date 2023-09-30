import React, { useEffect, useState } from "react";

export const ThemeContext = React.createContext();
export const ThemeUpdateContext = React.createContext();

const ThemeStatus = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(
    JSON.parse(localStorage.getItem("darkThemeStatus")) ?? false,
  );

  useEffect(() => {
    localStorage.setItem("darkThemeStatus", JSON.stringify(darkTheme));
  }, [darkTheme]);

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

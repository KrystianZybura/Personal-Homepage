import { useContext } from "react";

import { ThemeContext } from "../ThemeStatus";

export const useTheme = () => {
  const darkTheme = useContext(ThemeContext);

  return {
    styles: {
      background: darkTheme ? "#252525" : "#FBFBFE",
      fontSecondary: darkTheme ? "#FFFFFF" : "#6E7E91",
      font: darkTheme ? "#FFFFFF" : "#252525",
      primary: darkTheme ? "#2188FF" : "#0366D6",
      sectionBackground: darkTheme ? "#363636B8" : "#FFFFFF",
      border: darkTheme ? "#D1D5DA1A" : "#D1D5DA4D",
      borderHover: darkTheme ? "#0366D680" : "#0366D633",
      firstBoxShadow: "#090A3308",
      secondBoxShadow: "#090A3305",
      buttonBoxShadow: darkTheme ? "#6D93BE" : "#8CC2FF",
    },
    breakpoints: {
      laptop: 1200,
      tablet: 767,
      mobile: 450,
    },
  };
};

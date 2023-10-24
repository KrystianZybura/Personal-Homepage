import { useContext } from "react";

import { ThemeContext } from "../ThemeStatus";

export const useTheme = () => {
  const darkTheme = useContext(ThemeContext);

  return {
    styles: {
      background: darkTheme ? "#252525" : "#FBFBFE",
      font: darkTheme ? "#FFFFFF" : "#252525",
      fontWhite: "#FFFFFF",
      fontSecondary: darkTheme ? "#FFFFFF" : "#6E7E91",
      primary: darkTheme ? "#2188FF" : "#0366D6",
      sectionBackground: darkTheme ? "#363636B8" : "#FFFFFF",
      border: darkTheme ? "#D1D5DA1A" : "#D1D5DA4D",
      borderHover: darkTheme ? "#0366D680" : "#0366D633",
      boxShadow: "0px 16px 58px 0px #090A3308, 0px -2px 50px 0px #090A3305",
      buttonBoxShadow: darkTheme ? "#6D93BE" : "#8CC2FF",
      themeButtonBackground: darkTheme ? "#6D6D6D" : "#E5E5E5",
      sunIconBackground: darkTheme ? "#FFFFFF" : "#6E7E91",
      linkDecoration: "#0366d633",
      letterSpacing: 0.7,
      lineHeight: 25.2,
    },
    breakpoints: {
      laptop: 1200,
      tablet: 767,
      mobile: 450,
    },
  };
};

const getTheme = (dark) => {
  return {
    styles: {
      background: dark ? "#252525" : "#FBFBFE",
      fontSecondary: dark ? "#FFFFFF" : "#6E7E91",
      font: dark ? "#FFFFFF" : "#252525",
      primary: dark ? "#2188FF" : "#0366D6",
      sectionBackground: dark ? "#363636B8" : "#FFFFFF",
      border: dark ? "#D1D5DA1A" : "#D1D5DA4D",
      borderHover: dark ? "#0366D680" : "#0366D633",
      firstBoxShadow: "#090A3308",
      secondBoxShadow: "#090A3305",
      buttonBoxShadow: dark ? "#6D93BE" : "#8CC2FF",
    },
    breakpoints: {
      laptop: "1200px",
      tablet: "767px",
      mobile: "550px",
    },
  };
};

export { getTheme };

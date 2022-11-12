import React from "react";

export const IconosDays = (iconosDays) => {
  switch (iconosDays) {
    case "clear-day":
      iconosDays = "iconsDays/DiaDespejadoDays.svg";
      break;
    case "rain":
      iconosDays = "iconsDays/LluviaDays.svg"
      break;
    case "snow":
      iconosDays = "iconsDays/NieveDays.svg";
      break;
    case "thunderstorm":
      iconosDays = "iconsDays/TormentaDays.svg";
      break;
    case "cloudy":
      iconosDays = "iconsDays/NubladoDays.svg";
      break;
    case "partly-cloudy-day":
      iconosDays = "iconsDays/ParcialmenteNubladoDays.svg";
      break;
    case "partly-cloudy-night":
      iconosDays = "iconsDays/NocheParcialmenteNubladaDays.svg";
      break;
    case "fog":
      iconosDays = "iconsDays/NubladoDays.svg";
      break;
    case "drizzle":
      iconosDays = "iconsDays/LloviznaDays.svg";
      break;
    case "haze":
      iconosDays = "iconsDays/BrumaDays.svg";
      break;
    case "smoke":
      iconosDays = "iconsDays/HumoDays.svg";
      break;
    case "clear-night":
      iconosDays = "iconsDays/NocheDespejadaDays.svg";
      break;
    default:
      break;
  }
  return iconosDays;
};

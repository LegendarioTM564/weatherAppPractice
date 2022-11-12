import React from "react";

export const Iconos = (icono) => {
  switch (icono) {
    case "clear-day":
      icono = "icons/DiaDespejado.svg";
      break;
    case "rain":
      icono = "icons/Lluvia.svg";
      break;
    case "snow":
      icono = "icons/Nieve.svg";
      break;
    case "thunderstorm":
      icono = "icons/Tormenta.svg";
      break;
    case "cloudy":
      icono = "icons/Nublado.svg";
      break;
    case "partly-cloudy-day":
      icono = "icons/ParcialmenteNublado.svg";
      break;
    case "partly-cloudy-night":
      icono = "icons/NocheParcialmenteNublada.svg";
      break;
    case "fog":
      icono = "icons/Nublado.svg";
      break;
    case "drizzle":
      icono = "icons/Llovizna.svg";
      break;
    case "haze":
      icono = "icons/Bruma.svg";
      break;
    case "smoke":
      icono = "icons/Humo.svg";
      break;
    case "clear-night":
      icono = "icons/NocheDespejada.svg";
      break;
    default:
      break;
  }
  return icono;
};

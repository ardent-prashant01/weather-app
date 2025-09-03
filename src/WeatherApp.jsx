import React, { useState } from "react";
import WeatherWidget from "./WeatherWidget";
import Infobox from "./Infobox";
import "./WeatherApp.css";
import photo from "./assets/default.png";
export default function WeatherApp() {
  let [info, setInfo] = useState({
    city: "",
    temp: null,
    humidity: null,
    pressure: null,
    weather: "",
    feelslike: null,
    image: photo,
  });

  let getWeatherInfo = (curr) => {
    setInfo(curr);
  };

  return (
    <div className="weatherapp">
      <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>Weather App</h1>
      <WeatherWidget getWeatherInfo={getWeatherInfo}></WeatherWidget>
      <br />

      <Infobox info={info}></Infobox>
    </div>
  );
}

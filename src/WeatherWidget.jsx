import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./WeatherWidget.css";

export default function WeatherWidget({ getWeatherInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  let API_URL = "https://api.openweathermap.org/geo/1.0/direct";
  let API_KEY = "5d4ca41b66529cf010629ba616412f00";
  let API_URL2 = "https://api.openweathermap.org/data/2.5/weather";

  let getWeather = async () => {
    try {
      // Step 1: Get coordinates from city
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
      let jsonResponce = await response.json();
      console.log("Geo Response:", jsonResponce);

      // if (jsonResponce.length === 0) {
      //   alert("City not found");
      //   return;
      // }

      let { lat, lon } = jsonResponce[0];

      // Step 2: Get weather using coordinates
      let result = await fetch(
        `${API_URL2}?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
      );
      let weatherData = await result.json();
      console.log("Weather Response:", weatherData);

      let weatherResult = {
        city: city,
        temp: weatherData.main.temp,
        humidity: weatherData.main.humidity,
        pressure: weatherData.main.pressure,
        feelslike: weatherData.main.feels_like,
        weather: weatherData.weather[0].description,
        image: `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`,
      };
      console.log(weatherResult);
      return weatherResult;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setCity("");
      let currInfo = await getWeather();
      if (currInfo) {
        getWeatherInfo(currInfo); // pass to parent
      }
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="searchbox">
      <form onSubmit={handleSubmit}>
        <TextField
          required
          id="outlined-required"
          label="City"
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && (
          <b>
            <p style={{ marginTop: "5px", color: "red" }}>
              No such place exists
            </p>
          </b>
        )}
      </form>
    </div>
  );
}

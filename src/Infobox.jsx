import React from "react";
import "./Infobox.css";
import photo from "./assets/default.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
export default function Infobox({ info }) {
  return (
    <div className="infobox">
      <h2 style={{ margin: "10px 0" }}>Weather Info:</h2>
      <div className="cardcontainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={info.image || { photo }}
            title="Weather"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>🌡 Temperature: {info.temp} °C</p>
              <p>💧 Humidity: {info.humidity} %</p>
              <p>📊 Pressure: {info.pressure} mb</p>
              <p>☁ Weather: {info.weather}</p>
              <p>🤔 Feels Like: {info.feelslike} °C</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
      <br />
    </div>
  );
}

import React from "react";
import "../App.css";

export default function Card({ weatherData }) {
    const icon = weatherData.weather[0].icon;
    const visibilty = parseInt(weatherData.visibility)/1000;
    const date = new Date();
  return (
    <div className="card">
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={`${icon}`} />
      <h1>{weatherData.name}</h1>
      <p><span className="info">Temperature: </span>{parseInt(weatherData.main.temp)}&deg;F</p>
      <p><span className="info">Visibilty: </span>{visibilty} miles</p>
      <p><span className="info">Description: </span>{weatherData.weather[0].main}</p>
      <p><span className="info">Humidity: </span>{weatherData.main.humidity}%</p>
      <p><span className="info">Day: </span>{date.toDateString()} {date.toLocaleTimeString()}</p>
    </div>
  );
}

import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../ThemeContext";

function WeatherDisplay({ city }) {
  const [weather, setWeather] = useState(null);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=51.5&longitude=-0.12&current_weather=true`
        );
        const data = await res.json();
        setWeather(data.current_weather);
      } catch (err) {
        console.error("Error fetching weather", err);
      }
    };
    fetchWeather();
  }, [city]);

  return (
    <div className="weather-info">
      <h2>☁️ Weather in {city}</h2>
      {weather ? (
        <>
          <p>🌡 Temperature: {weather.temperature}°C</p>
          <p>💨 Wind Speed: {weather.windspeed} km/h</p>
          <p>🕒 Last Updated: {new Date().toLocaleTimeString()}</p>
        </>
      ) : (
        <p className="loading">Loading weather...</p>
      )}
    </div>
  );
}

export default WeatherDisplay;

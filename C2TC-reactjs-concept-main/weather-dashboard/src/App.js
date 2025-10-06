import React, { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import WeatherSearch from "./components/WeatherSearch";
import WeatherDisplay from "./components/WeatherDisplay";
import "../src/components/App.css";

function App() {
  const [theme, setTheme] = useState("dark");
  const [city, setCity] = useState("London");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`app-container ${theme}`}>
        <div className="glass-card">
          <h1 className="app-title">🌤 Weather Dashboard</h1>
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </button>
          <WeatherSearch onSearch={setCity} />
          <WeatherDisplay city={city} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

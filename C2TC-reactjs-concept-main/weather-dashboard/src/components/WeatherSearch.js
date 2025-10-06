import React, { useState, useCallback } from "react";

function WeatherSearch({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSearch = useCallback(
    (e) => {
      e.preventDefault();
      if (input.trim()) {
        onSearch(input);
        setInput("");
      }
    },
    [input, onSearch]
  );

  return (
    <form className="search-form" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Enter city name..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default WeatherSearch;

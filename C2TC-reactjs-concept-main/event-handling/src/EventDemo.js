import React, { useState } from "react";
import "./EventDemo.css";

function EventDemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [color, setColor] = useState("#00ffff");

  // Separate function
  const handleButtonClick = () => {
    setCount((prev) => prev + 1);
  };

  // Arrow function
  const handleMouseOver = () => {
    setColor("#32ff7e");
  };

  return (
    <div className="glass-container">
      <h2 style={{ color: color }}>✨ Event Handling Examples ✨</h2>

      {/* Separate function */}
      <button onClick={handleButtonClick}>Click Me (Count: {count})</button>

      {/* Arrow function */}
      <button
        onMouseOver={handleMouseOver}
        onMouseOut={() => setColor("#00ffff")}
      >
        Hover Me (Color changes)
      </button>

      {/* Inline function */}
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>You typed: {text || "nothing yet 😄"}</p>

      {/* Passing arguments */}
      <button onClick={() => alert(`Hello, ${text || "User"}!`)}>
        Greet 👋
      </button>

      <div className="footer-note">
        <p>React Event Handling Demo • Built with 💙</p>
      </div>
    </div>
  );
}

export default EventDemo;

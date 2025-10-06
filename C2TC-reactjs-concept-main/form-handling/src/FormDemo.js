import React, { useState } from "react";
// Import the CSS file

function FormDemo() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="form-container">
      <h1>React Form Handling</h1>

      <form className="form-box" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div className="result-box">
          <h3>Form Submitted Successfully ✅</h3>
          <p>
            <b>Username:</b> {formData.username}
          </p>
          <p>
            <b>Email:</b> {formData.email}
          </p>
        </div>
      )}
    </div>
  );
}

export default FormDemo;

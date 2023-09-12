import React, { useState } from "react";
import Home from '../components/Home.js';

const { USERNAME, PASSWORD } = process.env;

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [loggedIn, setLoggedIn] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = formData;
    if (username === USERNAME && password === PASSWORD){
      setLoggedIn(true);
    } else {
      console.error("Authentication failed");
    }
  };

  if (!loggedIn) {
    return (
      <div className="loginSection">
        <h1>Logo Goes Here</h1>
        <h3>Please Login:</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Username
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              maxLength="30"
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              maxLength="30"
              required
            />
          </label>
          <label>
            <input type="submit" value="Submit" />
          </label>
        </form>
      </div>
    );
  } else {
    return (
      <Home />
    );
  }
};

export default Login;

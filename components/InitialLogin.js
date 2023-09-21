import React, { useState } from "react";
import Home from '../components/Home.js';
import "bootstrap/dist/css/bootstrap.min.css";
import "../resources/index.css";

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
      <div className="loginSection" style={{ textAlign: 'center' }}>
        <img src="../resources/DancoGroupLogo.png" alt="Danco Group Logo" 
        className="loginLogo" width="30%" height="30%"/>
        <div className="card text-center">
        <h3>Please Login:</h3>
        <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              maxLength="30"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              maxLength="30"
              required
            />
          <label>
            <input type="submit" value="Submit" className="btn btn-primary"/>
          </label>
        </form>
        </div>
      </div>
    );
  } else {
    return (
      <Home />
    );
  }
};

export default Login;

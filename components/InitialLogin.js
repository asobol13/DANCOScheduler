import React from "react";

const Login = () => {
  return (
    <div className="loginSection">
      <h1>Logo Goes Here</h1>
      <h3>Please Login:</h3>
      <form>
        <label>
          Username
          <input type="text" maxLength="30"/>
        </label>
        <label>
          Password
          <input type="text" maxLength="30"/>
        </label>
        <label>
          <input type="submit" value="Submit" />
        </label>
      </form>
    </div>
  );
};

export default Login;

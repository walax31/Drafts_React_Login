import React, { useState } from "react";

function FormLogin({ onSubmit = () => null }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChangeUsername = (event) => {
    setUsername(event.target.value);
  };
  const handleInputChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(username, password);
    setUsername("");
    setPassword("");
    console.log(username);
    console.log(password);
  };

  return (
    <form onSubmit={handleSubmit} className="sign-in-form">
      <h2 className="title">Sign in</h2>

      <div className="input-field">
        <i className="fas fa-user"></i>
        <input
          value={username}
          onChange={handleInputChangeUsername}
          placeholder="username"
        />
      </div>

      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input
          value={password}
          onChange={handleInputChangePassword}
          placeholder="password"
          type="password"
        />
      </div>

      <button onSubmit={handleSubmit} type="submit" className="btn">
        Login
      </button>
    </form>
  );
}

export default FormLogin;

import React, { useState } from "react";

function FormSignUp({ onSubmit = () => null }) {
  const [username2, setUsername2] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const [conPassword, setConPassword] = useState("");

  const handleInputChangeUsername2 = (event) => {
    setUsername2(event.target.value);
  };

  const handleInputChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleInputChangePassword2 = (event) => {
    setPassword2(event.target.value);
  };
  const handleInputChangeCon = (event) => {
    setConPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(username2, password2, email, conPassword);
    setUsername2("");
    setEmail("");
    setPassword2("");
    setConPassword("");

    console.log(username2);
    console.log(email);
    console.log(password2);
    console.log(conPassword);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="sign-up-form">
        <h2 className="title">Sign up</h2>

        <div className="input-field">
          <i className="fas fa-user"></i>
          <input
            value={username2}
            onChange={handleInputChangeUsername2}
            placeholder="Username"
          />
        </div>

        <div className="input-field">
          <i className="fas fa-envelope"></i>
          <input
            value={email}
            onChange={handleInputChangeEmail}
            type="email"
            placeholder="Email"
          />
        </div>

        <div className="input-field">
          <i className="fas fa-lock"></i>
          <input
            value={password2}
            onChange={handleInputChangePassword2}
            type="password"
            placeholder="Password"
          />
        </div>

        <div className="input-field">
          <i className="fas fa-lock"></i>
          <input
            value={conPassword}
            onChange={handleInputChangeCon}
            type="password"
            placeholder="Confrim-Password"
          />
        </div>
        <button className="btn">Sign up</button>
      </form>
    </>
  );
}

export default FormSignUp;

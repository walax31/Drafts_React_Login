import React from "react";
import FormLogin from "./component/Form/FormLogin";
import FormSignUp from "./component/Form/FormSignUp";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="forms-container">
        <div className="signin-signup">
          <FormLogin />

          <FormSignUp />
        </div>
      </div>
    </div>
  );
}

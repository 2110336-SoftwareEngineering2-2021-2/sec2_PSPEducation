import React from "react";
import "./loginCardRight.css";

export default function LoginCardRight(props) {
  return (
    <div className="right">
      <div className="rightTitle">Welcome {props.position} !!</div>
      <div className="rightForm">
        <input
          className="rightFormEmail"
          type="text"
          autocomplete="off"
          spellcheck="false"
          placeholder="Email address"
          aria-invalid="false"
        />
        <input
          className="rightFormPassword"
          type="password"
          autocomplete="off"
          spellcheck="false"
          placeholder="Password"
          aria-invalid="false"
        />
        <button className="rightFormSubmit">Login</button>
      </div>

      <div className="rightRegister">
        <p className="rightRegisterText">
          New to WhereIsMyTutor?
          <a className="rightRegisterLink" href="/register">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

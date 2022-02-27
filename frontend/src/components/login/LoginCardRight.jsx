import React, { useEffect, useState } from "react";
// import { useCookies } from "react-cookie";
import "./loginCardRight.css";

var APIHandler = require("../simple/api/APIHandler");

export default function LoginCardRight({
  position,
  cookie,
  setCookie,
  state,
  setState,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // useEffect(() => {
  //   // Update the document title using the browser API
  //   console.log("login status Card:", state);
  // }, [state]);

  return (
    <>
      <div className="right">
        <div className="rightTitle">Welcome !!</div>

        <div className="rightForm">
          <LoginFormPane
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            cookie={cookie}
            setCookie={setCookie}
            state={state}
            setState={setState}
          />
        </div>

        <TextHelperRegister />
      </div>
    </>
  );
}

function LoginFormPane(props) {
  return (
    <>
      <input
        className="rightFormEmail"
        type="text"
        autoComplete="off"
        spellCheck="false"
        placeholder="Email address"
        aria-invalid="false"
        onChange={(e) => props.setEmail(e.target.value)}
      />

      <input
        className="rightFormPassword"
        type="password"
        autoComplete="off"
        spellCheck="false"
        placeholder="Password"
        aria-invalid="false"
        value={props.password}
        onChange={(e) => props.setPassword(e.target.value)}
      />

      <button
        className="rightFormLogin"
        onClick={() =>
          APIHandler.handleLogin(
            props.email,
            props.password,
            props.state,
            props.setState,
            props.cookie,
            props.setCookie
          )
        }
      >
        Login
      </button>
    </>
  );
}

function TextHelperRegister() {
  return (
    <div className="rightRegister">
      <p className="rightRegisterText">
        New to WhereIsMyTutor?
        <a className="rightRegisterLink" href="/register">
          Sign up
        </a>
      </p>
    </div>
  );
}

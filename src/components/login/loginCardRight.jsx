import React, { useState } from "react";
import { useCookies } from "react-cookie";

import "./loginCardRight.css";

export default function LoginCardRight(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["name"]);

  const handleSubmit = () => {
    // e.preventDefault();
    const user = { email, password };
    // console.log(e);
    console.log(user);

    setCookie("name", 555, { path: "/" });
    // fetch(`http://localhost:3000/get${props.position}`, {
    //   method: "GET",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(user),
    // }).then((e) => {
    //   setCookie("name", );
    //   console.log("new blog added");
    //   console.log(JSON.stringify(user));
    // });
  };
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
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="rightFormPassword"
          type="password"
          autocomplete="off"
          spellcheck="false"
          placeholder="Password"
          aria-invalid="false"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="rightFormSubmit" onClick={() => handleSubmit()}>
          Login
        </button>
      </div>

      <div className="rightRegister">
        <p className="rightRegisterText">
          New to WhereIsMyTutor?
          <a className="rightRegisterLink" href="/register">
            Sign up
          </a>
        </p>
      </div>
      <div>{cookies.get("name") && <h1>Hello {cookies.get("name")}!</h1>}</div>
    </div>
  );
}

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import "./loginCardRight.css";
import { sha512_256 } from "js-sha512";
import { Navigate } from "react-router-dom";

export default function LoginCardRight({ cookie, setCookie, position }) {
  const [email, setEmail] = useState("");
  const [password_1, setPassword_1] = useState("");
  const [state, setState] = useState(false);
  useEffect(() => {
    // Update the document title using the browser API
    console.log(state);
  }, [state]);

  const handleSubmit = async () => {
    // const password = sha512_256(password_1);
    const password = password_1;

    const user = { email, password };
    console.log()
    axios
      .post(`http://localhost:3000/auth/signin`, user, { withCredentials: true })
      .then((response) => {
        const data = response.data
        console.log(response);
        setState(true);
        setCookie("user", 'kuay');
        setCookie("user_role", data.type);
        if (data.type === "tutor") {
          return <Navigate to="/tutor" />;
        } else if (data.type === "student") {
          return <Navigate to="/student" />;
        } else if (data.type === "admin") {
          return <Navigate to="/admin" />;
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      {state && <Navigate to="/student" />}
      <div className="right">
        <div className="rightTitle">Welcome {state} !!</div>
        <div className="rightForm">
          <input
            className="rightFormEmail"
            type="text"
            autocomplete="off"
            spellCheck="false"
            placeholder="Email address"
            aria-invalid="false"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="rightFormPassword"
            type="password"
            autocomplete="off"
            spellCheck="false"
            placeholder="Password"
            aria-invalid="false"
            value={password_1}
            onChange={(e) => setPassword_1(e.target.value)}
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
        {/* <div>{get("user") && <h1>Hello {get("user")}!</h1>}</div> */}
      </div>
    </>
  );
}

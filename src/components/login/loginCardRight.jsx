import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import "./loginCardRight.css";
import { sha512_256 } from "js-sha512";
import { Navigate } from "react-router-dom";

export default function LoginCardRight({
  cookie,
  setCookie,
  removeCookie,
  position,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState(false);
  useEffect(() => {
    // Update the document title using the browser API
    console.log(state);
  }, [state]);

  const handleSubmit = async () => {
    const hashedPassword = sha512_256(password);
    const user = { email, hashedPassword };
    const d = new Date();

    await setCookie("user", "5555", d.getTime() + 60 * 60 * 24, { path: "/" });
    console.log("login");
    console.log("cookie");
    console.log(cookie);
    console.log("");
    setState(true);
    // axios
    //   .post(`/get${position}`, {
    //     body: JSON.stringify(user),
    //   })
    //   .then((e) => {
    //     setCookie(cookie, e.cookies, { path: "/" });
    //     if (e.position === "tutor") {
    //       return <Navigate to="/tutor" />;
    //     } else if (e.position === "student") {
    //       return <Navigate to="/student" />;
    //     } else if (e.position === "admin") {
    //       return <Navigate to="/admin" />;
    //     }
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
  };
  return (
    <>
      {state && <Navigate to="/tutor" />}
      <div className="right">
        <div className="rightTitle">Welcome {state} !!</div>
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
        {/* <div>{get("user") && <h1>Hello {get("user")}!</h1>}</div> */}
      </div>
    </>
  );
}

import React from "react";
import "./loginRightside.css";

// import AdminCards from "./AdminCards";

export default function LoginRightside() {
  return (
    <div className="right">
      <h1 className="titleRight">Welcome !!</h1>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="password" />
      <button className="submit">Login</button>
      <div className="textbox">
        <p className="register">
          New to WhereIsMyTutor?<br></br>
          <a className="registerLink" href="http://localhost:3000/register">
            create an account
          </a>
        </p>
      </div>
    </div>
  );
}

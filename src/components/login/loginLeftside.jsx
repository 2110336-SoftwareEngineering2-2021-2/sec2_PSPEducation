import React from "react";
import PspPic from "../../PSP-logo.png";
import "./loginLeftside.css";

export default function LoginLeftside() {
  return (
    <div className="left">
      <div className="loginButton icon1">
        <img src={PspPic} alt="" className="icon" />
      </div>
    </div>
  );
}

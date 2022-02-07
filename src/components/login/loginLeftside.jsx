import React from "react";
import PspIcon from "../../PSP-logo.ico";
import PspPic from "../../PSP-logo.png";
import "./loginLeftside.css";
// import "./studentFeed.css";
// import AdminCards from "./AdminCards";

export default function LoginLeftside() {
  return (
    <div className="left">
      <div className="loginButton icon1">
        <img src={PspPic} alt="" className="icon" />
      </div>
    </div>
  );
}

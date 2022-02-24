import React from "react";
import "./topLeftLogo.css";
import { Link } from "react-router-dom";

export default function TopLeftLogo() {
  return (
    <>
      <div className="topLeftContainer">
        <span className="topLeftlogo">
          <Link className="topLeftlogoLink" to="/">
            WhereIsMyTutor?
          </Link>
        </span>
        <span className="topLeftauthor">Powered by PSPEducaion</span>
      </div>
    </>
  );
}

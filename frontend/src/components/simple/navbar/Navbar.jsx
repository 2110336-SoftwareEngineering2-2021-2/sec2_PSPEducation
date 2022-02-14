import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
            <div className="topLeftContainer">
              <span className="topLeftlogo">
                <Link className="topLeftlogoLink" to="/">
                  WhereIsMyTutor?
                </Link>
              </span>
              <span className="topLeftauthor">Powered by PSPEducaion</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

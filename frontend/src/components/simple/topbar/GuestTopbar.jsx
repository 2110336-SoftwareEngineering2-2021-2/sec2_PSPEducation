import React from "react";
import "./guestTopbar.css";
import { Link } from "react-router-dom";

export default function GuestTopbar() {
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

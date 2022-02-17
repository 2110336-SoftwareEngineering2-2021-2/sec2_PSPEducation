import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footerWrapper">
          <span id="platform-version-text">
            1.10.4.1{" "}
            <a href="privacypolicy-2021.html" className="platform-policy">
              Privacy Policy
            </a>{" "}
            | updated on Feb 14 <sup>th</sup>, 2022
          </span>
          <span>
            <span className="platform-name">WhereIsMyTutor?</span> is operated
            by PSP Education, Chulalongkorn University
          </span>
        </div>
      </div>
    </>
  );
}

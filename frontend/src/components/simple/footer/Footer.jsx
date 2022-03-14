import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footerWrapper">
          <span id="platform-version-text">
            1.12.0.1{" "}
            <a href="privacypolicy-2022.html" className="platform-policy">
              Privacy Policy
            </a>{" "}
            | updated on Mar 15 <sup>th</sup>, 2022
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

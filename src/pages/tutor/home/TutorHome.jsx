import "./tutorHome.css";
import TutorTopbar from "../../../components/tutor/topbar/TutorTopbar";
import TutorSidebar from "../../../components/tutor/sidebar/TutorSidebar";
import TutorFeed from "../../../components/tutor/feed/TutorFeed";
import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
export default function TutorHome({ cookie, setCookie, removeCookie }) {
  const [state, setState] = useState(false);
  useEffect(() => {
    // Update the document title using the browser API
    console.log("home");
    console.log(cookie);
    console.log(cookie.user);
    console.log("");
    if (cookie.user === undefined) {
      setState(true);
    }
  }, []);
  return (
    <>
      {state && <Navigate to="/user/login" />}
      <TutorTopbar />
      <div className="pageContent">
        <div className="sidebarContainer">
          <TutorSidebar />
        </div>
        <div className="homeContainer">
          <div className="homeWrapper">
            <TutorFeed />
          </div>
        </div>
      </div>
    </>
  );
}

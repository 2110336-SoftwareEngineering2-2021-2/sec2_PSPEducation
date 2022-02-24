import "./tutorHome.css";
import Topbar from "../../../components/simple/topbar/Topbar";
import TutorSidebar from "../../../components/tutor/sidebar/TutorSidebar";
import TutorFeed from "../../../components/tutor/feed/TutorFeed";
import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

export default function TutorHome({ cookie, setCookie, removeCookie }) {
  const [state, setState] = useState(false);

  useEffect(() => {
    // Update the document title using the browser API
    if (
      cookie.user === undefined ||
      cookie.user === null ||
      cookie.user === ""
    ) {
      setState(true);
    }
  }, [state]);

  return (
    <>
      {state && <Navigate to="/login" />}
      <Topbar
        state={state}
        setState={setState}
        cookie={cookie}
        setCookie={setCookie}
        removeCookie={removeCookie}
      />
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

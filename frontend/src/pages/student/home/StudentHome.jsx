import "./studentHome.css";
import StudentTopbar from "../../../components/student/topbar/StudentTopbar";
import StudentSidebar from "../../../components/student/sidebar/StudentSidebar";
import StudentFeed from "../../../components/student/feed/StudentFeed";
import * as React from "react";
import { useState, useEffect } from "react";
// import { Navigate } from "react-router-dom";

export default function StudentHome({ cookie, setCookie, removeCookie }) {
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
      {/* {state && <Navigate to="/login/user" />} */}
      <StudentTopbar cookie = {cookie} setCookie = {setCookie} removeCookie = {removeCookie}/>
      <div className="pageContent">
        <div className="sidebarContainer">
          <StudentSidebar />
        </div>
        <div></div>
        <div className="homeContainer">
          <div className="homeWrapper">
            <StudentFeed />
          </div>
        </div>
      </div>
    </>
  );
}

import "./studentHome.css";
import StudentTopbar from "../../../components/student/topbar/StudentTopbar";
import StudentSidebar from "../../../components/student/sidebar/StudentSidebar";
import * as React from "react";
import { useState, useEffect, } from "react";
import { Navigate } from "react-router-dom";
function StudentHome({ cookie, setCookie, removeCookie }) {
  const [state, setState] = useState(false);
  useEffect(() => {
    // Update the document title using the browser API
    if (cookie.user === undefined || cookie.user === null || cookie.user ==='') {
      setState(true);
    }
  }, [state]);
  return (
    <>

      {state && <Navigate to="/user/login" />}
      <StudentTopbar />
      <div className="pageContent">
        <div className="sidebarContainer">
          <StudentSidebar />
        </div>
        <div></div>
        <div className="homeContainer">
          <div className="homeWrapper">
            <div className="content">
              <div className="card">
                <div className="cardContent">
                  <div className="">studentfeed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default StudentHome;

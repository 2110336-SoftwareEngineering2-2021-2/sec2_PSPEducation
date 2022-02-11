import "./studentHome.css";
import StudentTopbar from "../../../components/student/topbar/StudentTopbar";
import StudentSidebar from "../../../components/student/sidebar/StudentSidebar";
import * as React from "react";
import { withCookies, Cookies, useCookies } from "react-cookie";
import { get } from "react-cookie";
import { Cookie } from "@mui/icons-material";
function StudentHome({ cookie, setCookie, removeCookie }) {
  return (
    <>
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

function layout() {
  if (Cookie.user) {
  }
}

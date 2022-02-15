import "./adminHome.css";
import AdminTopbar from "../../../components/admin/topbar/AdminTopbar";
import AdminSidebar from "../../../components/admin/sidebar/AdminSidebar";
import AdminFeed from "../../../components/admin/feed/AdminFeed";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

export default function AdminHome({ cookie, setCookie, removeCookie }) {
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
      {state && <Navigate to="/adminlogin" />}
      <AdminTopbar />
      <div className="pageContent">
        <div className="sidebarContainer">
          <AdminSidebar />
        </div>
        <div className="homeContainer">
          <div className="homeWrapper">
            <AdminFeed />
          </div>
        </div>
      </div>
    </>
  );
}

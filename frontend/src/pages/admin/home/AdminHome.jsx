import "./adminHome.css";
import Topbar from "../../../components/simple/topbar/Topbar";
import Sidebar from "../../../components/simple/sidebar/Sidebar";
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
      <Topbar
        state={state}
        setState={setState}
        cookie={cookie}
        setCookie={setCookie}
        removeCookie={removeCookie}
      />
      <div className="pageContent">
        <div className="sidebarContainer">
          <Sidebar cookie={cookie} />
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

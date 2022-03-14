import "./Report.css";
import Topbar from "../../components/simple/topbar/Topbar";
import Sidebar from "../../components/simple/sidebar/Sidebar";
import ReportCard from "../../components/report/ReportCard";
import { React, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

export default function Report({ cookie, setCookie, removeCookie }) {
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
          <Sidebar cookie={cookie} />
        </div>
        <div className="homeContainer">
          <div className="homeWrapper">
            <ReportCard
              cookie={cookie}
              setCookie={setCookie}
              removeCookie={removeCookie}
            />
          </div>
        </div>
      </div>
    </>
  );
}

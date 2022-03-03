import React from "react";
import "./topbar.css";

import TopLeftLogo from "./topLeftLogo/TopLeftLogo";
import SearchBar from "./searchBar/SearchBar";
import TopRightMenu from "./topRightMenu/TopRightMenu";
import { userData } from "../../../dummyData";
import { Navigate } from "react-router-dom";

export default function Topbar({
  state,
  setState,
  cookie,
  setCookie,
  removeCookie,
}) {
  return (
    <>
      {state && <Navigate to="/login" />}
      <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
            <TopLeftLogo />
          </div>

          <div className="topCenter">
            <SearchBar />
          </div>

          <div className="topRight">
            <TopRightMenu
              userData={userData}
              state={state}
              setState={setState}
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

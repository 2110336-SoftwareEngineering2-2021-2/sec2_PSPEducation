import React, { useState, useEffect } from "react";
import "./topbar.css";
import TopLeftLogo from "./topLeftLogo/TopLeftLogo";
import SearchBar from "./searchBar/SearchBar";
import TopRightMenu from "./topRightMenu/TopRightMenu";
import { Navigate } from "react-router-dom";

const APIHandler = require("../api/APIHandler");

export default function Topbar({
  state,
  setState,
  setQuery,
  cookie,
  setCookie,
  removeCookie,
}) {
  const [userData, setUserData] = useState({
    fullname: "",
    username: "",
    balance: 0,
    imgURL: "",
  });

  const [push, setPush] = useState(false);

  useEffect(() => {
    APIHandler.handleShowBalance(setUserData, cookie.user, push, setPush);
  }, [push]);

  return (
    <>
      {state && <Navigate to="/login" />}
      <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
            <TopLeftLogo />
          </div>

          <div className="topCenter">
            <SearchBar setQuery={setQuery} />
          </div>

          <div className="topRight">
            <TopRightMenu
              userData={userData}
              setUserData={setUserData}
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

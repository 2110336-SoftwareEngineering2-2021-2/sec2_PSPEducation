import React, { useState } from "react";
import "./topbar.css";

import TopLeftLogo from "./topLeftLogo/TopLeftLogo";
import SearchBar from "./searchBar/SearchBar";
import TopRightMenu from "./topRightMenu/TopRightMenu";
import { userData } from "../../../dummyData";
import { Navigate } from "react-router-dom";

import axios from "axios";

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
    credit_balance: 0,
    imgURL: "",
  });
  // useEffect(){}
  axios
    .get(`http://localhost:3000/credit/user/balance/${cookie.user}`, {
      withCredentials: true,
    })
    .then((response) => {
      console.log(response);
      setUserData({
        fullname: response.fullname,
        username: response.username,
        credit_balance: response.credit_balance,
        imgURL: response.imgURL,
      });
    })
    .catch((err) => {
      console.log(err);
    });

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

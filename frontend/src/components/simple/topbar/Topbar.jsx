import React, { useState, useEffect } from "react";
import "./topbar.css";

import TopLeftLogo from "./topLeftLogo/TopLeftLogo";
import SearchBar from "./searchBar/SearchBar";
import TopRightMenu from "./topRightMenu/TopRightMenu";
import { userData } from "../../../dummyData";
import { Navigate } from "react-router-dom";

import axios from "axios";

const APIHandler = require("../api/APIHandler");

export default function Topbar({
  state,
  setState,
  setQuery,
  cookie,
  setCookie,
  removeCookie,
}) {
  const [userData, setUserData] = useState(
    {
    fullname: "",
    username: "",
    balance: 0,
    imgURL: "",
  });
  const [push, setPush] = useState(false);

  useEffect(() =>{
    setTimeout(() => {
      APIHandler.showBalance(setUserData ,cookie.user)
    }, 500);
    
  }, [userData]);
  // useEffect(()=>{
  //   console.log(userData.balance)
  // },[])
  //     .get(`http://localhost:3000/credit/user/balance/${cookie.user}`, {
  //       withCredentials: true,
  //     })
  //     .then((response) => {
  //       setUserData({
  //         fullname: response.data.fullname,
  //         username: response.data.username,
  //         balance: response.data.balance,
  //         imgURL: response.data.imgURL,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  

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

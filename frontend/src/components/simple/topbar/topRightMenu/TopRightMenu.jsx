import React, { useState, useEffect } from "react";
import "./topRightMenu.css";
import {
  AppsOutlined,
  EmailOutlined,
  NotificationsNoneOutlined,
  AddCircle,
} from "@mui/icons-material";

import DropProfileMenu from "../dropProfileMenu/DropProfileMenu";

const APIHandler = require("../../../../simple/api/APIHandler");

export default function TopRightMenu({
  userData,
  state,
  setState,
  cookie,
  setCookie,
  removeCookie,
}) {
  const [dropProfileState, setDropProfileState] = useState(false);
  const [balance, setBalance] = useState(0)
  setBalance(userData.credit_balance)
  return (
    <>
      <div className="topRightContainer">
        <IconBar />

        <UserProfileBar
          userData={userData}
          dropProfileState={dropProfileState}
          setDropProfileState={setDropProfileState},
          balance = {balance}
          setBalance = {setBalance}
        />

        <DropProfileMenu
          trigger={dropProfileState}
          setTrigger={setDropProfileState}
          state={state}
          setState={setState}
          cookie={cookie}
          setCookie={setCookie}
          removeCookie={removeCookie}
        />
      </div>
    </>
  );
}

function UserProfileBar({ userData, dropProfileState, setDropProfileState, balance, setBalance}) {
  useEffect(() => {
  }, [balance]);
  return (
    <>
      {/* <button
          onClick={() => setDropProfileState(!dropProfileState)}
          className="topbarProfileButton"
        ></button> */}
      <div
        className="topbarAvatarContainer"
        onClick={() => setDropProfileState(!dropProfileState)}
      >
        <button
          onClick={() => setDropProfileState(!dropProfileState)}
          className="topbarProfileButton"
        >
          <img src={userData.imgURL} alt="" className="topbarAvatar" />
        </button>
      </div>

      <div className="topbarCreditContainer">
        <span className="topbarCredit">credit: {userData.credit_balance}</span>
        <button className="topBarAddMoneyButton" onClick={() => APIHandler.handleUpdateBalance(userData.userId, userData.credit_balance, 0, setBalance)}>
          <AddCircle className="topBarAddMoneyButtonIcon" />
        </button>
      </div>
    </>
  );
}

function IconBar() {
  return (
    <>
      <div className="topbarIconContainer">
        <div className="topbarIcon">
          <AppsOutlined />
        </div>
      </div>
      <div className="topbarIconContainer">
        <div className="topbarIcon">
          <EmailOutlined />
        </div>
        <span className="topIconBadge">3</span>
      </div>
      <div className="topbarIconContainer">
        <div className="topbarIcon">
          <NotificationsNoneOutlined />
        </div>
        <span className="topIconBadge">8</span>
      </div>
    </>
  );
}

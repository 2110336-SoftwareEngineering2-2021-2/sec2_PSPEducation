import React, { useState, useEffect } from "react";
import "./topRightMenu.css";
import {
  AppsOutlined,
  EmailOutlined,
  NotificationsNoneOutlined,
  AddCircle,
} from "@mui/icons-material";

import DropProfileMenu from "../dropProfileMenu/DropProfileMenu";

const APIHandler = require("../../api/APIHandler");

export default function TopRightMenu({
  userData,
  state,
  setState,
  cookie,
  setCookie,
  removeCookie,
}) {
  const [dropProfileState, setDropProfileState] = useState(false);
  const [newBalance, setNewBalance] = useState(userData.balance);
  return (
    <>
      <div className="topRightContainer">
        <IconBar />

        <UserProfileBar
          userData={userData}
          dropProfileState={dropProfileState}
          setDropProfileState={setDropProfileState}
          newBalance={newBalance}
          setNewBalance={setNewBalance}
          cookie ={cookie}
          setCookie = {setCookie}
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

function UserProfileBar({
  userData,
  dropProfileState,
  setDropProfileState,
  newBalance,
  setNewBalance,
  cookie
}) {
  useEffect(() => {}, [newBalance]);
  return (
    <>
      <div
        className="topbarAvatarContainer">
        <button
          onClick={() => setDropProfileState(!dropProfileState)}
          className="topbarProfileButton"
        >
          <img src={userData.imgURL} alt="" className="topbarAvatar" />
        </button>
      </div>

      <div className="topbarCreditContainer">
        <span className="topbarCredit">credit: {newBalance}</span>
        <button
          className="topBarAddMoneyButton"
          onClick={() =>
            APIHandler.handleUpdateBalance(
              cookie.user,
              0,
              setNewBalance
            )
          }
        >
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

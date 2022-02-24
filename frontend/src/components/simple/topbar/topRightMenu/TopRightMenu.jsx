import React, { useState } from "react";
import "./topRightMenu.css";
import {
  AppsOutlined,
  EmailOutlined,
  NotificationsNoneOutlined,
} from "@mui/icons-material";
import DropProfileMenu from "../dropProfileMenu/DropProfileMenu";

export default function TopRightMenu({
  userData,
  state,
  setState,
  cookie,
  setCookie,
  removeCookie,
}) {
  const [dropProfileState, setDropProfileState] = useState(false);

  return (
    <>
      <div className="topRightContainer">
        <IconBar />

        <button
          onClick={() => setDropProfileState(!dropProfileState)}
          className="topbarProfileButton"
        >
          <UserProfileBar userData={userData} />
        </button>

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

function UserProfileBar({ userData }) {
  return (
    <>
      <div className="topbarAvatarContainer">
        <img src={userData.imgURL} alt="" className="topbarAvatar" />
      </div>

      <div className="topbarCreditContainer">
        <span className="topbarCredit">credit: {userData.credit_balance}</span>
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

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./tutorTopbar.css";
import {
  AppsOutlined,
  EmailOutlined,
  NotificationsNoneOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { userData } from "../../../dummyData";

export default function TutorTopbar() {
  const [dropProfileState, setDropProfileState] = useState(false);

  const imgSrc = userData.imgURL;

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <div className="topLeftContainer">
            <span className="topLeftlogo">
              <Link className="topLeftlogoLink" to="/">
                WhereIsMyTutor?
              </Link>
            </span>
            <span className="topLeftauthor">Powered by PSPEducaion</span>
          </div>
        </div>
        <div className="topCenter">
          <div className="searchbar">
            <SearchOutlined className="searchIcon" />
            <input
              type="search"
              autoComplete="off"
              spellCheck="false"
              placeholder="Search for course, tutor or subject"
              className="searchInput"
              aria-invalid="false"
            />
          </div>
        </div>
        <div className="topRight">
          <div className="topRightContainer">
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
            <button
              onClick={() => setDropProfileState(!dropProfileState)}
              className="topAvatarContainer"
            >
              <img src={imgSrc} alt="" className="topAvatar" />
            </button>

            <div className="userInfo">
              <DropProfileMenu
                trigger={dropProfileState}
                setTrigger={setDropProfileState}
              />
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DropProfileMenu(props) {
  return props.trigger ? (
    <div className="dropProfileMenu">
      <div className="viewPopupContainer">
        <div className="viewPopupContent">
          <span className="dropProfileFullname">{userData.fullname}</span>
          <span className="dropProfileUserName">{userData.username}</span>
          <span className="dropProfileCredit">
            credit: {userData.credit_balance}
          </span>
          <span className="dropProfileCredit">Setting</span>
          <span className="dropProfileCredit">Logout</span>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

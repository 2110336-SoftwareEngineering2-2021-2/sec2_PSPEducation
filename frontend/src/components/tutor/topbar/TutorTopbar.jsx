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
              className="tutorProfileButton"
            >
              <div className="tutorAvatarContainer">
                <img src={imgSrc} alt="" className="tutorAvatar" />
              </div>

              <div className="tutorCreditContainer">
                <span className="tutorCredit">
                  credit: {userData.credit_balance}
                </span>
              </div>
            </button>

            <TutorDropProfileMenu
              trigger={dropProfileState}
              setTrigger={setDropProfileState}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function TutorDropProfileMenu(props) {
  return props.trigger ? (
    <div className="tutorDropProfileMenu">
      <div className="tutorDropProfileList">
        <div className="tutorDropProfileItem">My Profile</div>
        <div className="tutorDropProfileItem">Setting</div>
        <div className="tutorDropProfileItem">Logout</div>
      </div>
    </div>
  ) : (
    ""
  );
}

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./studentTopbar.css";
import {
  AppsOutlined,
  EmailOutlined,
  NotificationsNoneOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { userData } from "../../../dummyData";

export default function StudentTopbar() {
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
              <AppsOutlined />
            </div>
            <div className="topbarIconContainer">
              <EmailOutlined />
              <span className="topIconBadge">3</span>
            </div>
            <div className="topbarIconContainer">
              <NotificationsNoneOutlined />
              <span className="topIconBadge">8</span>
            </div>

            <button
              onClick={() => setDropProfileState(!dropProfileState)}
              className="studentProfileButton"
            >
              <div className="studentAvatarContainer">
                <img src={imgSrc} alt="" className="studentAvatar" />
              </div>

              <div className="studentCreditContainer">
                <span className="studentCredit">
                  credit: {userData.credit_balance}
                </span>
              </div>
            </button>

            <StudentDropProfileMenu
              trigger={dropProfileState}
              setTrigger={setDropProfileState}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function StudentDropProfileMenu(props) {
  return props.trigger ? (
    <div className="studentDropProfileMenu">
      <div className="studentDropProfileList">
        <div className="studentDropProfileItem">My Profile</div>
        <div className="studentDropProfileItem">Setting</div>
        <div className="studentDropProfileItem">Logout</div>
      </div>
    </div>
  ) : (
    ""
  );
}

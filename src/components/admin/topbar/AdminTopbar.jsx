import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./adminTopbar.css";
import {
  AppsOutlined,
  EmailOutlined,
  NotificationsNoneOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { userData } from "../../../dummyData";

export default function AdminTopbar() {
  const [dropProfileState, setDropProfileState] = useState(false);

  const imgSrc = userData.imgURL;
  return (
    <div className="adminTopbar">
      <div className="adminTopbarWrapper">
        <div className="adminTopLeft">
          <div className="adminTopLeftContainer">
            <span className="adminTopLeftlogo">
              <Link className="adminTopLeftlogoLink" to="/">
                WhereIsMyTutor?
              </Link>
            </span>
            <span className="adminTopLeftauthor">Powered by PSPEducaion</span>
          </div>
        </div>
        <div className="adminTopCenter">
          <div className="adminSearchbar">
            <SearchOutlined className="searchIcon" />
            <input
              type="search"
              autoComplete="off"
              spellCheck="false"
              placeholder="Search for course, tutor or subject"
              className="adminSearchInput"
              aria-invalid="false"
            />
          </div>
        </div>
        <div className="adminTopRight">
          <div className="adminTopRightContainer">
            <div className="adminTopbarIconContainer">
              <AppsOutlined />
            </div>
            <div className="adminTopbarIconContainer">
              <EmailOutlined />
              <span className="adminTopIconBadge">3</span>
            </div>
            <div className="adminTopbarIconContainer">
              <NotificationsNoneOutlined />
              <span className="adminTopIconBadge">8</span>
            </div>

            <button
              onClick={() => setDropProfileState(!dropProfileState)}
              className="adminTopbarProfileButton"
            >
              <div className="adminAvatarContainer">
                <img src={imgSrc} alt="" className="adminAvatar" />
              </div>
            </button>

            <AdminDropProfileMenu
              trigger={dropProfileState}
              setTrigger={setDropProfileState}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function AdminDropProfileMenu(props) {
  return props.trigger ? (
    <div className="adminDropProfileMenu">
      <div className="adminDropProfileList">
        <div className="adminDropProfileItem">My Profile</div>
        <div className="adminDropProfileItem">Setting</div>
        <div className="adminDropProfileItem">Logout</div>
      </div>
    </div>
  ) : (
    ""
  );
}

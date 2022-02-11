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
              autocomplete="off"
              spellcheck="false"
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
            <div className="topbarMyProfile">
              <button
                onClick={() => setDropProfileState(!dropProfileState)}
                className="topbarMyProfileButton"
              >
                <div className="topAvatarContainer">
                  <img src={imgSrc} alt="" className="topAvatar" />
                </div>
              </button>
            </div>

            <DropProfileMenu
              trigger={dropProfileState}
              setTrigger={setDropProfileState}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function DropProfileMenu(props) {
  return props.trigger ? (
    <div className="dropProfileMenu">
      {/* <div className="viewPopupContainer"> */}
      <div className="dropProfileList">
        <div className="dropProfileItem">My Profile</div>
        <div className="dropProfileItem">Setting</div>
        <div className="dropProfileItem">Logout</div>
      </div>
      {/* </div> */}
    </div>
  ) : (
    ""
  );
}

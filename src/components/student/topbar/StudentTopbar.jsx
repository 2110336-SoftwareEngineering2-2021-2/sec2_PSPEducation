import React from "react";
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
            <img src={imgSrc} alt="" className="topAvatar" />
            <div className="userInfo">
              {/* <span className="fullName">{userData.fullname}</span>
            <span className="userName">{userData.username}</span>
            <span>credit: {userData.credit_balance}</span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

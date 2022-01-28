import React from "react";
import "./topbar.css";
import {
  AppsOutlined,
  EmailOutlined,
  NotificationsNoneOutlined,
} from "@mui/icons-material";

export default function Topbar() {
  const imgSrc =
    "https://i.pinimg.com/564x/2c/82/0d/2c820d2ea88ad5c92141e282074ddfe7.jpg";
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <div className="topLeftContainer">
            <span className="topLeftlogo">WhereIsMyTutor?</span>
            <span className="topLeftauthor">Powered by PSPEducaion</span>
          </div>
        </div>
        <div className="topRight">
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
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./topbar.css";
import {
  AppsOutlined,
  EmailOutlined,
  NotificationsNoneOutlined,
} from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <div className="topLeftContainer">
            <span className="topLeftlogo">WhereIsMyTutor?</span>
            {/* <img src="https://i.ibb.co/Wp9wk4W/PSP-logo.png" alt="" className="topLogo" /> */}
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

          <img
            src="https://www.anime-planet.com/images/characters/139231.jpg"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}

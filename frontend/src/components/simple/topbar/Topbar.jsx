import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./topbar.css";
import {
  AppsOutlined,
  EmailOutlined,
  NotificationsNoneOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { userData } from "../../../dummyData";
import DropProfileMenu from "./dropProfileMenu/DropProfileMenu";

export default function TutorTopbar({
  state,
  setState,
  cookie,
  setCookie,
  removeCookie,
}) {
  const [dropProfileState, setDropProfileState] = useState(false);
  const imgSrc = userData.imgURL;

  return (
    <>
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
                className="topbarProfileButton"
              >
                <div className="topbarAvatarContainer">
                  <img src={imgSrc} alt="" className="topbarAvatar" />
                </div>

                <div className="topbarCreditContainer">
                  <span className="topbarCredit">
                    credit: {userData.credit_balance}
                  </span>
                </div>
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
          </div>
        </div>
      </div>
    </>
  );
}

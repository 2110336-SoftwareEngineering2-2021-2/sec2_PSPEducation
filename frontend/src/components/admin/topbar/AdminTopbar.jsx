import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import "./adminTopbar.css";
import {
  AppsOutlined,
  EmailOutlined,
  NotificationsNoneOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { userData } from "../../../dummyData";
import axios from "axios";

export default function AdminTopbar({ cookie, setCookie, removeCookie }) {
  const [dropProfileState, setDropProfileState] = useState(false);

  const [state, setState] = useState(false);

  const imgSrc = userData.imgURL;

  useEffect(() => {
    // Update the document title using the browser API
    // console.log("logout: ", state);
  }, [state]);

  const handleLogout = async () => {
    axios
      .post(`http://localhost:3000/auth/signout`, {}, { withCredentials: true })
      .then((response) => {
        removeCookie("user");
        console.log("response " + response);
        removeCookie("user_role");
        setState(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      {state && <Navigate to="/" />}
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
                handleChange={handleLogout}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function AdminDropProfileMenu(props) {
  return props.trigger ? (
    <div className="adminDropProfileMenu">
      <div className="adminDropProfileList">
        <div className="adminDropProfileItem">My Profile</div>
        <div className="adminDropProfileItem">Setting</div>
        <div className="adminDropProfileItem">
          <button onClick={() => props.handleChange()}>Logout</button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

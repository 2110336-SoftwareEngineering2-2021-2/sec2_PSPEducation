import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import "./tutorTopbar.css";
import {
  AppsOutlined,
  EmailOutlined,
  NotificationsNoneOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { userData } from "../../../dummyData";
import axios from "axios";

export default function TutorTopbar({ cookie, setCookie, removeCookie }) {
  const [dropProfileState, setDropProfileState] = useState(false);

  const [state, setState] = useState(false);

  const imgSrc = userData.imgURL;

  useEffect(() => {
    // Update the document title using the browser API
    console.log("this is the tutor top bar");
    console.log(state);
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
                handleChange={handleLogout}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function TutorDropProfileMenu(props) {
  return props.trigger ? (
    <div className="tutorDropProfileMenu">
      <div className="tutorDropProfileList">
        <div className="tutorDropProfileItem">My Profile</div>
        <div className="tutorDropProfileItem">Setting</div>
        <div className="tutorDropProfileItem">
          <button onClick={() => props.handleChange()}>Logout</button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

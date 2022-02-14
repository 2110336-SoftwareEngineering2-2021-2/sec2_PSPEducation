import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import "./studentTopbar.css";
import {
  AppsOutlined,
  EmailOutlined,
  NotificationsNoneOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { userData } from "../../../dummyData";
import {Cookies } from 'react-cookie';

export default function StudentTopbar({cookie, setCookie, removeCookie}) {
  const [dropProfileState, setDropProfileState] = useState(false);
  const [state, setState] = useState(false)
  const imgSrc = userData.imgURL;
  let config = {
    headers: {
    }
  }

  useEffect(() => {
    // Update the document title using the browser API
    console.log('student top bar')
    console.log(state);
  }, [state]);

  const handleLogout = async () => {
    console.log("KUYKUYKUY")
    axios.post(`http://localhost:3000/auth/signout`, {}, { withCredentials: true })
    .then((response) => {
      console.log("HELLO HELLO")
      removeCookie('user')
      removeCookie('user_role')
      setState(true)
    })
    .catch((e) => {
      console.log(e);
    });
  }

  return (
    <>
    {state && <Navigate to="/login" />}
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
              handleChange={handleLogout}
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

function StudentDropProfileMenu(props) {
  return props.trigger ? (
    <div className="studentDropProfileMenu">
      <div className="studentDropProfileList">
        <div className="studentDropProfileItem">My Profile</div>
        <div className="studentDropProfileItem">Setting</div>
        <div className="studentDropProfileItem">
        <button onClick={() => props.handleChange()}>
          Logout
        </button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

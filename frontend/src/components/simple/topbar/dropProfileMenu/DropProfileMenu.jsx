import React from "react";
import "./dropProfileMenu.css";

export default function DropProfileMenu({
  trigger,
  setTrigger,
  state,
  setState,
  cookie,
  setCookie,
  removeCookie,
}) {
  var APIHandler = require("../../api/APIHandler");

  return trigger ? (
    <div className="dropProfileMenu">
      <div className="dropProfileList">
        <div className="dropProfileItem">
          <button>
            <a className="dropProfileItemLink" href="/myprofile">
              My Profile
            </a>
          </button>
        </div>
        <div className="dropProfileItem">
          <button>
            <a className="dropProfileItemLink" href="/myprofile">
              My Profile
            </a>
          </button>
        </div>
        <div className="dropProfileItem">Setting</div>
        <div className="dropProfileItem">
          <button>
            <a
              className="dropProfileItemLink"
              href={`/${cookie.user_role}/report`}
            >
              Report problem
            </a>
          </button>
        </div>
        <div className="dropProfileItem">
          <button
            onClick={() =>
              APIHandler.handleLogout(
                state,
                setState,
                cookie,
                setCookie,
                removeCookie
              )
            }
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

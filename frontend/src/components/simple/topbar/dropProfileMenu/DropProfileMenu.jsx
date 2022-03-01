import React from "react";
import "./dropProfileMenu.css";

export default function DropProfileMenu(props) {
  var APIHandler = require("../../api/APIHandler");

  return props.trigger ? (
    <div className="dropProfileMenu">
      <div className="dropProfileList">
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
            <a className="dropProfileItemLink" href="/report">
              Report problem
            </a>
          </button>
        </div>
        <div className="dropProfileItem">
          <button
            onClick={() =>
              APIHandler.handleLogout(
                props.state,
                props.setState,
                props.cookie,
                props.setCookie,
                props.removeCookie
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

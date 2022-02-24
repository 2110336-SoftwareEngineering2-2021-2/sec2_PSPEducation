import LoginCardLeft from "../../components/login/LoginCardLeft";
import LoginCardRight from "../../components/login/LoginCardRight";
import GuestTopbar from "../../components/simple/topbar/GuestTopbar";
import Footer from "../../components/simple/footer/Footer";
import "./loginUser.css";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

export default function LoginUser({ cookie, setCookie, removeCookie }) {
  const [state, setState] = useState(false);

  useEffect(() => {
    // Update the document title using the browser API
    if (
      cookie.user !== undefined &&
      cookie.user !== null &&
      cookie.user !== ""
    ) {
      setState(true);
    } else {
      removeCookie("user");
      removeCookie("user_role");
    }
    // console.log("login state:", state);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <>
      {state && cookie.user_role === "admin" && <Navigate to="/admin" />}
      {state && cookie.user_role === "tutor" && <Navigate to="/tutor" />}
      {state && cookie.user_role === "student" && <Navigate to="/student" />}

      <div className="userLogin">
        <GuestTopbar />
        <div className="userLoginWrapper">
          <div className="userLoginCard">
            <LoginCardLeft />
            <LoginCardRight
              position="user"
              cookie={cookie}
              setCookie={setCookie}
              state={state}
              setState={setState}
            />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

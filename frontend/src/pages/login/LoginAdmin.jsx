import LoginLeftside from "../../components/login/loginCardLeft";
import LoginRightside from "../../components/login/loginCardRight";
import Navbar from "../../components/simple/navbar/Navbar";
import Footer from "../../components/simple/footer/Footer";
import "./loginAdmin.css";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

export default function LoginAdmin({ cookie, setCookie }) {
  const [state, setState] = useState(false);

  useEffect(() => {
    // Update the document title using the browser API
    if (
      cookie.user !== undefined &&
      cookie.user !== null &&
      cookie.user !== ""
    ) {
      setState(true);
    }
  }, [state]);

  return (
    <>
      {state && cookie.user_role === "admin" && <Navigate to="/admin" />}
      {state && cookie.user_role === "tutor" && <Navigate to="/tutor" />}
      {state && cookie.user_role === "student" && <Navigate to="/student" />}

      <div className="adminLogin">
        <Navbar />
        <div className="adminLoginWrapper">
          <div className="adminLoginCard">
            <LoginLeftside />
            <LoginRightside
              position="admin"
              cookie={cookie}
              setCookie={setCookie}
            />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

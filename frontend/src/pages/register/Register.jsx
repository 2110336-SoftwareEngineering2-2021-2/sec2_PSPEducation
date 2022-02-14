// import LoginLeftside from "../../components/login/loginLeftside";
// import LoginRightside from "../../components/login/loginRightside";
import Navbar from "../../components/simple/navbar/Navbar";
import Footer from "../../components/simple/footer/Footer";
import RegisterCard from "../../components/register/RegisterCard.jsx";
import "./register.css";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
export default function Register({ cookie, setCookie }) {
  const [state, setState] = useState(false);
  useEffect(() => {
    // Update the document title using the browser API
    if (cookie.user !== undefined && cookie.user !== null && cookie.user !=='') {
      setState(true);
    }
  }, [state]);
  return (
    <>
    {state && cookie.user_role ===  'admin' && <Navigate to='/admin'/>}
    {state && cookie.user_role ===  'tutor' && <Navigate to='/tutor'/>}
    {state && cookie.user_role ===  'student' && <Navigate to='/student'/>}

      <div className="register">
        <Navbar />
        <div className="registerWrapper">
          <div className="registerCard">
            <RegisterCard />
          </div>
          <div className="registerFooter">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

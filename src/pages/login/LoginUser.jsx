import LoginLeftside from "../../components/login/loginCardLeft";
import LoginRightside from "../../components/login/loginCardRight";
import Navbar from "../../components/simple/navbar/Navbar";
import Footer from "../../components/simple/footer/Footer";
import "./loginUser.css";

export default function LoginUser({ cookie, setCookie, removeCookie }) {
  return (
    <>
      <div className="login">
        <Navbar />
        <div className="loginWrapper">
          <div className="loginCard">
            <LoginLeftside />
            <LoginRightside
              position="user"
              cookie={cookie}
              setCookie={setCookie}
              removeCookie={removeCookie}
            />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

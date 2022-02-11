import LoginLeftside from "../../components/login/loginCardLeft";
import LoginRightside from "../../components/login/loginCardRight";
import Navbar from "../../components/simple/navbar/Navbar";
import Footer from "../../components/simple/footer/Footer";
import "./loginUser.css";

export default function LoginAdmin({ cookie, setCookie, removeCookie }) {
  return (
    <>
      <div className="login">
        <Navbar />
        <div className="loginWrapper">
          <div className="loginCard">
            <LoginLeftside />
            <LoginRightside
              position="admin"
              cookie={cookie}
              setCookie={setCookie}
              remove={removeCookie}
            />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

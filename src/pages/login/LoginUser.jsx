import LoginLeftside from "../../components/login/loginCardLeft";
import LoginRightside from "../../components/login/loginCardRight";
import Navbar from "../../components/simple/navbar/Navbar";
import Footer from "../../components/simple/footer/Footer";
import "./loginUser.css";

export default function LoginUser() {
  return (
    <>
      <div className="login">
        <Navbar />
        <div className="loginWrapper">
          <div className="loginCard">
            <LoginLeftside />
            <LoginRightside position="user" />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

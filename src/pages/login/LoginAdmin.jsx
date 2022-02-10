import LoginLeftside from "../../components/login/loginCardLeft";
import LoginRightside from "../../components/login/loginCardRight";
import Navbar from "../../components/simple/navbar/Navbar";
import Footer from "../../components/simple/footer/Footer";
import "./loginUser.css";

export default function LoginAdmin() {
  return (
    <>
      <div className="login">
        <Navbar />
        <div className="loginWrapper">
          <div className="loginCard">
            <LoginLeftside />
            <LoginRightside position="admin" />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

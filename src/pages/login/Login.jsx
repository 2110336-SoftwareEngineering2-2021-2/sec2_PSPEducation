import LoginLeftside from "../../components/login/loginCardLeft";
import LoginRightside from "../../components/login/loginCardRight";
import Navbar from "../../components/simple/navbar/Navbar";
import Footer from "../../components/simple/footer/Footer";
import "./login.css";

export default function Login() {
  return (
    <>
      <div className="login">
        <Navbar />
        <div className="loginWrapper">
          <div className="loginCard">
            <LoginLeftside />
            <LoginRightside />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

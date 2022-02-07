// import LoginLeftside from "../../components/login/loginLeftside";
// import LoginRightside from "../../components/login/loginRightside";
import Navbar from "../../components/simple/navbar/Navbar";
import Footer from "../../components/simple/footer/Footer";
import "./register.css";

export default function Register() {
  return (
    <>
      <div className="register">
        <Navbar />
        <div className="registerWrapper">
          <div className="registerCard">BLANK</div>
          <div className="registerFooter">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

import LoginLeftside from "../../components/login/loginLeftside";
import LoginRightside from "../../components/login/loginRightside";
import "./login.css";

export default function Login() {
  return (
    <>
      <div className="login">
        <FakeNavbar />
        <div className="loginWrapper">
          {/* <h1 className="loginTitle">Login as a Tutor</h1> */}
          <div className="loginCard">
            <LoginLeftside />
            <LoginRightside />
          </div>
          <div className="loginFooter">
            <span id="platform-version-text">
              1.10.2.1{" "}
              <a href="privacypolicy-2021.html" target="_blank">
                Privacy Policy
              </a>{" "}
              | updated on Feb 7 <sup>th</sup>, 2022
            </span>
            <span>
              <span className="platform-name">WhereIsMyTutor?</span> are
              operated by PSP Education Center, Chulalongkorn University
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

function FakeNavbar() {
  return (
    <>
      <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
            <div className="topLeftContainer">
              <span className="topLeftlogo">WhereIsMyTutor?</span>
              <span className="topLeftauthor">Powered by PSPEducaion</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

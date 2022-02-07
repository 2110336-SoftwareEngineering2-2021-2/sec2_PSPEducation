import "../home/studentHome.css";
import StudentTopbar from "../../../components/student/topbar/StudentTopbar";
import LoginLeftside from "../../../components/login/loginLeftside";
import LoginRightside from "../../../components/login/loginRightside";
import "./studentLogin.css";
export default function StudentHome() {
  return (
    <>
      <StudentTopbar />
      <div className="login">
        <h1 className="loginTitle">Login as a Student</h1>
        <div className="wrapper">
          <LoginLeftside />
          <LoginRightside />
        </div>
        <div className="anotherLogin">
          <button className="changeType">
            <a href="http://localhost:3000/tutor/login">Log in as a tutor</a>
          </button>
        </div>
      </div>
    </>
  );
}

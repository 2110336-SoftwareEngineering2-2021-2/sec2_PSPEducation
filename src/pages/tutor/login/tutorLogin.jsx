import StudentTopbar from "../../../components/student/topbar/StudentTopbar";
import LoginLeftside from "../../../components/login/loginLeftside";
import LoginRightside from "../../../components/login/loginRightside";
import "./tutorLogin.css";
export default function StudentHome() {
  return (
    <>
      <StudentTopbar />
      <div className="login">
        <h1 className="loginTitle">Login as a Tutor</h1>
        <div className="wrapper">
          <LoginLeftside />
          <LoginRightside />
        </div>
        <div className="anotherLogin">
          <button className="changeType">
            <a href="http://localhost:3000/student/login">
              Log in as a Student
            </a>
          </button>
        </div>
      </div>
    </>
  );
}

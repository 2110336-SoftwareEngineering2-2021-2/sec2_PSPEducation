import "./studentHome.css";
import StudentTopbar from "../../../components/student/topbar/StudentTopbar";
import StudentSidebar from "../../../components/student/sidebar/StudentSidebar";

export default function StudentHome() {
  return (
    <>
      <StudentTopbar />
      <div className="pageContent">
        <div className="sidebarContainer">
          <StudentSidebar />
        </div>

        <div className="homeContainer">
          <div className="homeWrapper">
            <div className="content">
              <div className="card">
                <div className="cardContent">
                  <div className="">studentfeed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import "./studentHome.css";
import StudentTopbar from "../../../components/student/topbar/StudentTopbar";
import StudentSidebar from "../../../components/student/sidebar/StudentSidebar";
import StudentFeed from "../../../components/student/feed/StudentFeed";

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
            <StudentFeed />
          </div>
        </div>
      </div>
    </>
  );
}

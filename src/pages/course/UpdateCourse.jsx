import "./tutorHome.css";
import TutorTopbar from "../../components/tutor/topbar/TutorTopbar";
import TutorSidebar from "../../components/tutor/sidebar/TutorSidebar";
import TutorFeed from "../../components/tutor/feed/TutorFeed";
import UpdateCourseCard from "../../components/course/update/UpdateCourseCard";

export default function UpdateCourse() {
  return (
    <>
      <TutorTopbar />
      <div className="pageContent">
        <div className="sidebarContainer">
          <TutorSidebar />
        </div>
        <div className="homeContainer">
          <div className="homeWrapper">
            <UpdateCourseCard />
          </div>
        </div>
      </div>
    </>
  );
}

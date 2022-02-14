import "./tutorHome.css";
import TutorTopbar from "../../components/tutor/topbar/TutorTopbar";
import TutorSidebar from "../../components/tutor/sidebar/TutorSidebar";
import MainCourseCard from "../../components/tutor/feed/course/MainCourseCard";

export default function MainCourse() {
  return (
    <>
      <TutorTopbar />
      <div className="pageContent">
        <div className="sidebarContainer">
          <TutorSidebar />
        </div>
        <div className="homeContainer">
          <div className="homeWrapper">
            <MainCourseCard />
          </div>
        </div>
      </div>
    </>
  );
}

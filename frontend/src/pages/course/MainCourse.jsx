import "./tutorHome.css";
import TutorTopbar from "../../components/tutor/topbar/TutorTopbar";
import TutorSidebar from "../../components/tutor/sidebar/TutorSidebar";
import TutorFeed from "../../components/tutor/feed/TutorFeed";
import MainCourseCard from "../../components/tutor/course/MainCourseCard";

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

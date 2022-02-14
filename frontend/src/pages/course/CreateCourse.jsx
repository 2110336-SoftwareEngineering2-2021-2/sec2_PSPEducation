import "./createCourse.css";
import TutorTopbar from "../../components/tutor/topbar/TutorTopbar";
import TutorSidebar from "../../components/tutor/sidebar/TutorSidebar";
import TutorFeed from "../../components/tutor/feed/TutorFeed";
import CreateCourseCard from "../../components/course/create/createCourseCard";

export default function CreateCourse() {
  return (
    <>
      <TutorTopbar />
      <div className="pageContent">
        <div className="sidebarContainer">
          <TutorSidebar />
        </div>
        <div className="homeContainer">
          <div className="homeWrapper">
            <CreateCourseCard />
          </div>
        </div>
      </div>
    </>
  );
}

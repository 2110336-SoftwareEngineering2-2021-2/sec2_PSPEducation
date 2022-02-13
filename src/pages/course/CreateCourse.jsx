import "./createCourse.css";
import TutorTopbar from "../../components/tutor/topbar/TutorTopbar";
import TutorSidebar from "../../components/tutor/sidebar/TutorSidebar";
import MainCard from "../../components/course/mainCard";

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
            <MainCard />
          </div>
        </div>
      </div>
    </>
  );
}

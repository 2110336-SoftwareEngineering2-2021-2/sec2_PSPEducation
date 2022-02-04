import "./tutorHome.css";
import TutorTopbar from "../../../components/tutor/topbar/TutorTopbar";
import TutorSidebar from "../../../components/tutor/sidebar/TutorSidebar";

export default function TutorHome() {
  return (
    <>
      <TutorTopbar />
      <div className="pageContent">
        <div className="sidebarContainer">
          <TutorSidebar />
        </div>

        <div className="homeContainer">
          <div className="homeWrapper">
            <div className="content">
              <div className="card">
                <div className="cardContent">
                  <div className="">feed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import "./home.css";
import Topbar from "../../../components/tutor/topbar/Topbar";
import Sidebar from "../../../components/tutor/sidebar/Sidebar";

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="home">
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

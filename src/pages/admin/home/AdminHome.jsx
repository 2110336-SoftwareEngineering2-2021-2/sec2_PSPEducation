import "./adminHome.css";
import Topbar from "../../../components/admin/topbar/Topbar";
import Sidebar from "../../../components/admin/sidebar/Sidebar";
import Feed from "../../../components/admin/feed/Feed";

export default function AdminHome() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <div className="home">
          <div className="homeWrapper">
            <Feed />
          </div>
        </div>
      </div>
    </>
  );
}

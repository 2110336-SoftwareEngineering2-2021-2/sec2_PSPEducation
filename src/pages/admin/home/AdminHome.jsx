import "./adminHome.css";
import AdminTopbar from "../../../components/admin/topbar/AdminTopbar";
import AdminSidebar from "../../../components/admin/sidebar/AdminSidebar";
import Feed from "../../../components/admin/feed/Feed";

export default function AdminHome() {
  return (
    <>
      <AdminTopbar />
      <div className="pageContent">
        <div className="sidebarContainer">
          <AdminSidebar />
        </div>
        <div className="homeContainer">
          <div className="homeWrapper">
            <Feed />
          </div>
        </div>
      </div>
    </>
  );
}

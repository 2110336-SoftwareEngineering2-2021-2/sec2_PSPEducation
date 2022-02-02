import "./adminHome.css";
import AdminTopbar from "../../../components/admin/topbar/AdminTopbar";
import AdminSidebar from "../../../components/admin/sidebar/AdminSidebar";
import Feed from "../../../components/admin/feed/Feed";

export default function AdminHome() {
  return (
    <>
      <AdminTopbar />
      <div className="homeContainer">
        <AdminSidebar />
        <div className="home">
          <div className="homeWrapper">
            <Feed />
          </div>
        </div>
      </div>
    </>
  );
}

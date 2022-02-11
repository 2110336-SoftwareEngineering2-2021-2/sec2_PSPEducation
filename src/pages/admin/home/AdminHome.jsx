import "./adminHome.css";
import AdminTopbar from "../../../components/admin/topbar/AdminTopbar";
import AdminSidebar from "../../../components/admin/sidebar/AdminSidebar";
import AdminFeed from "../../../components/admin/feed/AdminFeed";

export default function AdminHome({ cookie, setCookie, removeCookie }) {
  return (
    <>
      <AdminTopbar />
      <div className="pageContent">
        <div className="sidebarContainer">
          <AdminSidebar />
        </div>
        <div className="homeContainer">
          <div className="homeWrapper">
            <AdminFeed />
          </div>
        </div>
      </div>
    </>
  );
}

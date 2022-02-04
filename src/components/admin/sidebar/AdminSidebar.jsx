import "./adminSidebar.css";
import {
  ViewListRounded,
  HowToRegRounded,
  SchoolRounded,
  SummarizeRounded,
  FormatListBulletedRounded,
  HelpOutline,
  Event,
} from "@mui/icons-material";

export default function AdminSidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <ViewListRounded className="sidebarIcon" />
            <span className="sidebarListItemText">All Categories</span>
          </li>

          <li className="sidebarListItem">
            <HowToRegRounded className="sidebarIcon" />
            <span className="sidebarListItemText">Tutor Validation</span>
          </li>

          <li className="sidebarListItem">
            <SchoolRounded className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>

          <li className="sidebarListItem">
            <SummarizeRounded className="sidebarIcon" />
            <span className="sidebarListItemText">User Reports</span>
          </li>

          <li className="sidebarListItem">
            <FormatListBulletedRounded className="sidebarIcon" />
            <span className="sidebarListItemText">Agenda</span>
          </li>

          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">FAQ</span>
          </li>

          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
        </ul>
        <hr className="sidebarHr" />
      </div>
    </div>
  );
}

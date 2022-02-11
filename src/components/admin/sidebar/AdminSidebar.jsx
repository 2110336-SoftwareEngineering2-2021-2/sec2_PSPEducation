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
import { Link } from "react-router-dom";
export default function AdminSidebar() {
  return (
    <div className="adminSidebar">
      <div className="adminSidebarWrapper">
        <ul className="adminSidebarList">
          <li className="adminSidebarListItem">
            <ViewListRounded className="adminSidebarIcon" />

            <Link className="adminSidebarListItemText" to="/admin/all">
              All Categories
            </Link>
          </li>

          <li className="adminSidebarListItem">
            <HowToRegRounded className="adminSidebarIcon" />

            <Link className="adminSidebarListItemText" to="/admin/tutorvalid">
              Tutor Validation
            </Link>
          </li>

          <li className="adminSidebarListItem">
            <SchoolRounded className="adminSidebarIcon" />

            <span className="adminSidebarListItemText" to="/admin">
              Courses
            </span>
          </li>

          <li className="adminSidebarListItem">
            <SummarizeRounded className="adminSidebarIcon" />

            <Link className="adminSidebarListItemText" to="/admin/userrpt">
              User Reports
            </Link>
          </li>

          <li className="adminSidebarListItem">
            <FormatListBulletedRounded className="adminSidebarIcon" />

            <span className="adminSidebarListItemText" to="/admin">
              Agenda
            </span>
          </li>

          <li className="adminSidebarListItem">
            <HelpOutline className="adminSidebarIcon" />

            <span className="adminSidebarListItemText" to="/admin">
              FAQ
            </span>
          </li>

          <li className="adminSidebarListItem">
            <Event className="adminSidebarIcon" />

            <span className="adminSidebarListItemText" to="/admin">
              Events
            </span>
          </li>
        </ul>
        <hr className="adminSidebarHr" />
      </div>
    </div>
  );
}

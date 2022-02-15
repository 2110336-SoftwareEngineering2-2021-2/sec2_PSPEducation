import "./studentSidebar.css";
import {
  HistoryEduOutlined,
  GroupAddRounded,
  //ReceiptLongRounded,
  PaymentsRounded,
  HelpOutline,
  Event,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function StudentSidebar() {
  return (
    <div className="studentSidebar">
      <div className="studentSidebarWrapper">
        <ul className="studentSidebarList">
          <li className="studentSidebarListItem">
            <HistoryEduOutlined className="studentSidebarIcon" />

            <Link className="studentSidebarListItemText" to="/student/mycourse">
              My Courses
            </Link>
          </li>

          <li className="studentSidebarListItem">
            <GroupAddRounded className="studentSidebarIcon" />

            <Link
              className="studentSidebarListItemText"
              to="/student/enrollreq"
            >
              Enrollment Requests
            </Link>
          </li>

          <li className="studentSidebarListItem">
            <PaymentsRounded className="studentSidebarIcon" />

            <span className="studentSidebarListItemText" to="/student">
              Payment
            </span>
          </li>

          <li className="studentSidebarListItem">
            <HelpOutline className="studentSidebarIcon" />

            <span className="studentSidebarListItemText" to="/student">
              FAQ
            </span>
          </li>

          <li className="studentSidebarListItem">
            <Event className="studentSidebarIcon" />

            <span className="studentSidebarListItemText" to="/student">
              Events
            </span>
          </li>
        </ul>
        <hr className="studentSidebarHr" />
      </div>
    </div>
  );
}
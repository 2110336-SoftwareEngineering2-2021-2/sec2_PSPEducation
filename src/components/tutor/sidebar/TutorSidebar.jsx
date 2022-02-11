import "./tutorSidebar.css";
import {
  HistoryEduOutlined,
  GroupAddRounded,
  ReceiptLongRounded,
  PaymentsRounded,
  HelpOutline,
  Event,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function TutorSidebar() {
  return (
    <div className="tutorSidebar">
      <div className="tutorSidebarWrapper">
        <ul className="tutorSidebarList">
          <li className="tutorSidebarListItem">
            <HistoryEduOutlined className="tutorSidebarIcon" />

            <Link className="tutorSidebarListItemText" to="/tutor/mycourse">
              My Courses
            </Link>
          </li>

          <li className="tutorSidebarListItem">
            <GroupAddRounded className="tutorSidebarIcon" />

            <Link className="tutorSidebarListItemText" to="/tutor/enrollreq">
              Enrollment Requests
            </Link>
          </li>

          <li className="tutorSidebarListItem">
            <ReceiptLongRounded className="tutorSidebarIcon" />

            <Link className="tutorSidebarListItemText" to="/tutor">
              Subscription
            </Link>
          </li>

          <li className="tutorSidebarListItem">
            <PaymentsRounded className="tutorSidebarIcon" />

            <Link className="tutorSidebarListItemText" to="/tutor">
              Payment
            </Link>
          </li>

          <li className="tutorSidebarListItem">
            <HelpOutline className="tutorSidebarIcon" />

            <Link className="tutorSidebarListItemText" to="/tutor">
              FAQ
            </Link>
          </li>

          <li className="tutorSidebarListItem">
            <Event className="tutorSidebarIcon" />

            <Link className="tutorSidebarListItemText" to="/tutor">
              Events
            </Link>
          </li>
        </ul>
        <hr className="tutorSidebarHr" />
      </div>
    </div>
  );
}

import "./tutorSidebar.css";
import {
  HistoryEduOutlined,
  GroupAddRounded,
  ReceiptLongRounded,
  PaymentsRounded,
  HelpOutline,
  Event,
} from "@mui/icons-material";

export default function TutorSidebar() {
  return (
    <div className="tutorSidebar">
      <div className="tutorSidebarWrapper">
        <ul className="tutorSidebarList">
          <li className="tutorSidebarListItem">
            <HistoryEduOutlined className="tutorSidebarIcon" />
            <span className="tutorSidebarListItemText">My Courses</span>
          </li>

          <li className="tutorSidebarListItem">
            <GroupAddRounded className="tutorSidebarIcon" />
            <span className="tutorSidebarListItemText">
              Enrollment Requests
            </span>
          </li>

          <li className="tutorSidebarListItem">
            <ReceiptLongRounded className="tutorSidebarIcon" />
            <span className="tutorSidebarListItemText">Subscription</span>
          </li>

          <li className="tutorSidebarListItem">
            <PaymentsRounded className="tutorSidebarIcon" />
            <span className="tutorSidebarListItemText">Payment</span>
          </li>

          <li className="tutorSidebarListItem">
            <HelpOutline className="tutorSidebarIcon" />
            <span className="tutorSidebarListItemText">FAQ</span>
          </li>

          <li className="tutorSidebarListItem">
            <Event className="tutorSidebarIcon" />
            <span className="tutorSidebarListItemText">Events</span>
          </li>
        </ul>
        <hr className="tutorSidebarHr" />
      </div>
    </div>
  );
}

import "./studentSidebar.css";
import {
  HistoryEduOutlined,
  GroupAddRounded,
  ReceiptLongRounded,
  PaymentsRounded,
  HelpOutline,
  Event,
} from "@mui/icons-material";

export default function StudentSidebar() {
  return (
    <div className="studentSidebar">
      <div className="studentSidebarWrapper">
        <ul className="studentSidebarList">
          <li className="studentSidebarListItem">
            <HistoryEduOutlined className="studentSidebarIcon" />
            <span className="studentSidebarListItemText">My Courses</span>
          </li>

          <li className="studentSidebarListItem">
            <GroupAddRounded className="studentSidebarIcon" />
            <span className="studentSidebarListItemText">
              Enrollment Requests
            </span>
          </li>

          <li className="studentSidebarListItem">
            <PaymentsRounded className="studentSidebarIcon" />
            <span className="studentSidebarListItemText">Payment</span>
          </li>

          <li className="studentSidebarListItem">
            <HelpOutline className="studentSidebarIcon" />
            <span className="studentSidebarListItemText">FAQ</span>
          </li>

          <li className="studentSidebarListItem">
            <Event className="studentSidebarIcon" />
            <span className="studentSidebarListItemText">Events</span>
          </li>
        </ul>
        <hr className="studentSidebarHr" />
      </div>
    </div>
  );
}

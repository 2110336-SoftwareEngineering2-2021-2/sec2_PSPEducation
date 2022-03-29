import "./sidebar.css";
import {
  ViewListRounded,
  HowToRegRounded,
  SchoolRounded,
  SummarizeRounded,
  FormatListBulletedRounded,
  HistoryEduOutlined,
  GroupAddRounded,
  ReceiptLongRounded,
  PaymentsRounded,
  HelpOutline,
  Event,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Sidebar({ cookie }) {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <TutorSidebarList cookie={cookie} />
          <StudentSidebarList cookie={cookie} />
          <AdminSidebarList cookie={cookie} />
        </ul>
        <hr className="sidebarHr" />
      </div>
    </div>
  );
}

function TutorSidebarList({ cookie }) {
  return cookie.user_role === "tutor" ? (
    <>
      <li className="sidebarListItem">
        <HistoryEduOutlined className="sidebarIcon" />
        <Link className="sidebarListItemText" to="/tutor/mycourse">
          My Courses
        </Link>
      </li>

      <li className="sidebarListItem">
        <GroupAddRounded className="sidebarIcon" />
        <Link className="sidebarListItemText" to="/tutor/enrollreq">
          Enrollment Requests
        </Link>
      </li>

      <li className="sidebarListItem">
        <ReceiptLongRounded className="sidebarIcon" />
        <Link className="sidebarListItemText" to="/tutor">
          Subscription
        </Link>
      </li>

      <li className="sidebarListItem">
        <PaymentsRounded className="sidebarIcon" />
        <Link className="sidebarListItemText" to="/tutor/payment">
          Payment
        </Link>
      </li>

      <li className="sidebarListItem">
        <HelpOutline className="sidebarIcon" />
        <Link className="sidebarListItemText" to="/tutor">
          FAQ
        </Link>
      </li>

      <li className="sidebarListItem">
        <Event className="sidebarIcon" />
        <Link className="sidebarListItemText" to="/tutor">
          Events
        </Link>
      </li>
    </>
  ) : (
    ""
  );
}

function StudentSidebarList({ cookie }) {
  return cookie.user_role === "student" ? (
    <>
      <li className="sidebarListItem">
        <HistoryEduOutlined className="sidebarIcon" />
        <Link className="sidebarListItemText" to="/student/mycourse">
          My Course Enrollments
        </Link>
      </li>

      <li className="sidebarListItem">
        <PaymentsRounded className="sidebarIcon" />
        <Link className="sidebarListItemText" to="/student/payment">
          Payment
        </Link>
      </li>

      <li className="sidebarListItem">
        <HelpOutline className="sidebarIcon" />
        <Link className="sidebarListItemText" to="/student">
          FAQ
        </Link>
      </li>

      <li className="sidebarListItem">
        <Event className="sidebarIcon" />
        <Link className="sidebarListItemText" to="/student">
          Events
        </Link>
      </li>
    </>
  ) : (
    ""
  );
}

function AdminSidebarList({ cookie }) {
  return cookie.user_role === "admin" ? (
    <>
      <li className="sidebarListItem">
        <ViewListRounded className="sidebarIcon" />
        <Link className="sidebarListItemText" to="/admin/all">
          All Categories
        </Link>
      </li>

      <li className="sidebarListItem">
        <HowToRegRounded className="sidebarIcon" />
        <Link className="sidebarListItemText" to="/admin/tutorvalid">
          Tutor Validation
        </Link>
      </li>

      <li className="sidebarListItem">
        <SchoolRounded className="sidebarIcon" />
        <Link className="sidebarListItemText" to="/admin">
          Courses
        </Link>
      </li>

      <li className="sidebarListItem">
        <SummarizeRounded className="sidebarIcon" />
        <Link className="sidebarListItemText" to="/admin/userrpt">
          User Reports
        </Link>
      </li>

      <li className="sidebarListItem">
        <FormatListBulletedRounded className="sidebarIcon" />
        <Link className="sidebarListItemText" to="/admin">
          Agenda
        </Link>
      </li>

      <li className="sidebarListItem">
        <HelpOutline className="sidebarIcon" />
        <Link className="sidebarListItemText" to="/admin">
          FAQ
        </Link>
      </li>

      <li className="sidebarListItem">
        <Event className="sidebarIcon" />
        <Link className="sidebarListItemText" to="/admin">
          Events
        </Link>
      </li>
    </>
  ) : (
    ""
  );
}

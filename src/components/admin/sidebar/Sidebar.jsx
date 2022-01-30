import "./sidebar.css";
import {
  ViewListRounded,
  HowToRegRounded,
  SchoolRounded,
  SummarizeRounded,
  FormatListBulletedRounded,
  HelpOutline,
  Event,
} from "@mui/icons-material";
// import { MyCourses } from "./sidebar-cards/MyCourse";
// import { Appts } from "./sidebar-cards/ApptReq";
// import { MsgReq } from "./sidebar-cards/MsgReq";
// import { myCourseData, apptData, msgData } from "../../../dummyData";

export default function Sidebar() {
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
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        {/* <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul> */}
      </div>
    </div>
  );
}

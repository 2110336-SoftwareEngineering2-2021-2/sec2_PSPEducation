import "./studentSidebar.css";
import {
  AutoAwesomeMotionOutlined,
  TaskOutlined,
  ForumOutlined,
} from "@mui/icons-material";
import { MyCourses } from "./student-sidebar-cards/MyCourse";
import { Appts } from "./student-sidebar-cards/ApptReq";
import { MsgReq } from "./student-sidebar-cards/MsgReq";
import { myCourseData, apptData, msgData } from "../../../dummyData";

export default function StudentSidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <div className="sidebarTitle">
            <div className="sidebarTitleLeft">
              <div className="sidebarTitleName">My Courses</div>
              <div className="sidebarTitleBadge">{myCourseData.length}</div>
            </div>
            <div className="sidebarTitleRight">
              <AutoAwesomeMotionOutlined className="sidebarTitleIcon" />
            </div>
          </div>
          <div className="sideBarCardWrapper">
            <MyCourses />
          </div>
        </div>
        <div className="sidebarMenu">
          <div className="sidebarTitle">
            <div className="sidebarTitleLeft">
              <div className="sidebarTitleName">Enrollment Requests</div>
              <div className="sidebarTitleBadge">{apptData.length}</div>
            </div>
            <div className="sidebarTitleRight">
              <TaskOutlined className="sidebarTitleIcon" />
            </div>
          </div>
          <div className="sideBarCardWrapper">
            <Appts />
          </div>
        </div>

        <div className="sidebarMenu">
          <div className="sidebarTitle">
            <div className="sidebarTitleLeft">
              <div className="sidebarTitleName">Message Request</div>
              <div className="sidebarTitleBadge">{msgData.length}</div>
            </div>
            <div className="sidebarTitleRight">
              <ForumOutlined className="sidebarTitleIcon" />
            </div>
          </div>
          <div className="sideBarCardWrapper">
            <MsgReq />
          </div>
        </div>
      </div>
    </div>
  );
}

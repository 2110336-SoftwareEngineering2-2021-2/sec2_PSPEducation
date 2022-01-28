import "./sidebar.css";
import {
  DateRange,
  DynamicFeedOutlined,
  ForumOutlined,
} from "@mui/icons-material";
import { TodayClass } from "./sidebar-cards/TodayClass";
import { Appts } from "./sidebar-cards/ApptReq";
import { MsgReq } from "./sidebar-cards/MsgReq";
import { classData, apptData, msgData } from "../../dummyData";

export default function Sidebar() {
  console.log(classData.length);
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <div className="sidebarTitle">
            <div className="sidebarTitleLeft">
              <div className="sidebarTitleName">Today's Class</div>
              <div className="sidebarTitleBadge">{classData.length}</div>
            </div>
            <div className="sidebarTitleRight">
              <DateRange className="sidebarTitleIcon" />
            </div>
          </div>
          <div className="sideBarCardWrapper">
            <TodayClass />
          </div>
        </div>
        <div className="sidebarMenu">
          <div className="sidebarTitle">
            <div className="sidebarTitleLeft">
              <div className="sidebarTitleName">Appointment Request</div>
              <div className="sidebarTitleBadge">{apptData.length}</div>
            </div>
            <div className="sidebarTitleRight">
              <DynamicFeedOutlined className="sidebarTitleIcon" />
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

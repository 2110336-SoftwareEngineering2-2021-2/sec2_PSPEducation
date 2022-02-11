import React from "react";
import "./tutorFeed.css";
import {
  AutoAwesomeMotionOutlined,
  TaskOutlined,
  ForumOutlined,
} from "@mui/icons-material";
import { MyCourses } from "./tutor-feed-widgets/MyCourse";
import { EnrReq } from "./tutor-feed-widgets/EnrReq";
import { MsgReq } from "./tutor-feed-widgets/MsgReq";
import { myCourseData, apptData, msgData } from "../../../dummyData";
import { Outlet } from "react-router-dom";

export default function TutorFeed() {
  return (
    <>
      <Outlet />
    </>
  );
}

export function MyCrsComp() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <div className="feedCard">
          <div className="feedTitle">
            <div className="feedTitleLeft">
              <div className="feedTitleName">My Courses</div>
              <div className="feedTitleBadge">{myCourseData.length}</div>
            </div>

            <div className="feedTitleRight">
              <AutoAwesomeMotionOutlined className="feedTitleIcon" />
            </div>
          </div>

          <div className="feedWidgetWrapper">
            <MyCourses />
          </div>
        </div>
      </div>
    </div>
  );
}

export function EnrollReqComp() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <div className="feedCard">
          <div className="feedTitle">
            <div className="feedTitleLeft">
              <div className="feedTitleName">Enrollment Requests</div>
              <div className="feedTitleBadge">{apptData.length}</div>
            </div>

            <div className="feedTitleRight">
              <TaskOutlined className="feedTitleIcon" />
            </div>
          </div>

          <div className="feedWidgetWrapper">
            <EnrReq />
          </div>
        </div>
      </div>
    </div>
  );
}

export function MsgReqComp() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <div className="feedCard">
          <div className="feedTitle">
            <div className="feedTitleLeft">
              <div className="feedTitleName">Message Request</div>
              <div className="feedTitleBadge">{msgData.length}</div>
            </div>

            <div className="feedTitleRight">
              <ForumOutlined className="feedTitleIcon" />
            </div>
          </div>

          <div className="feedWidgetWrapper">
            <MsgReq />
          </div>
        </div>
      </div>
    </div>
  );
}

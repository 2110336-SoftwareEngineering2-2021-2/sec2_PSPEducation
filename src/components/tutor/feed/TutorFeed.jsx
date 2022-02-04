import React from "react";
import "./tutorFeed.css";
import {
  AutoAwesomeMotionOutlined,
  TaskOutlined,
  ForumOutlined,
} from "@mui/icons-material";
import { MyCourses } from "./tutor-feed-widgets/MyCourse";
import { Appts } from "./tutor-feed-widgets/ApptReq";
import { MsgReq } from "./tutor-feed-widgets/MsgReq";
import { myCourseData, apptData, msgData } from "../../../dummyData";

export default function TutorFeed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <div className="feedMenu">
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
        <div className="feedMenu">
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
            <Appts />
          </div>
        </div>

        <div className="feedMenu">
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
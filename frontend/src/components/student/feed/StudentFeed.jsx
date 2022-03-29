import React from "react";
import "./studentFeed.css";
import { AutoAwesomeMotionOutlined, TaskOutlined } from "@mui/icons-material";
import { MyCourses } from "./student-feed-widgets/MyCourse";
import { Appts } from "./student-feed-widgets/ApptReq";
import MyEnrollCourseTable from "./student-feed-widgets/MyEnrollCourseTable";
import { myCourseData, apptData } from "../../../dummyData";
import { Outlet } from "react-router-dom";

export default function StudentFeed({ cookie, setCookie, removeCookie }) {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Outlet />
      </div>
    </div>
  );
}

export function MyEnrollCourseList({ cookie, setCookie, removeCookie }) {
  return (
    <>
      <MyEnrollCourseTable
        cookie={cookie}
        setCookie={setCookie}
        removeCookie={removeCookie}
      />
    </>
  );
}

export function MyCrsCompSt() {
  return (
    <div className="feedMenu">
      <div className="feedTitle">
        <div className="feedTitleLeft">
          <div className="feedTitleName">My Courses </div>
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
  );
}

export function EnrollReqCompSt() {
  return (
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
  );
}

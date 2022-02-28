import React, { useState } from "react";
import "./tutorFeed.css";
import {
  TaskOutlined,
  ForumOutlined,
  CloseOutlined,
} from "@mui/icons-material";
import { EnrReq } from "./tutor-feed-widgets/enrreq/EnrReq";
import { MsgReq } from "./tutor-feed-widgets/msgreq/MsgReq";
import { apptData, msgData } from "../../../dummyData";
import { Outlet } from "react-router-dom";
import CreateCoursePopup from "./tutor-feed-widgets/mycourse/create/CreateCoursePopup";
import MyCourseListTable from "./tutor-feed-widgets/mycourse/MyCourseListTable";
import MyEnrollListTable from "./tutor-feed-widgets/enrreq/MyEnrollListTable";

export default function TutorFeed() {
  return (
    <>
      <Outlet />
    </>
  );
}

export function MyCourseList({ cookie, setCookie, removeCookie }) {
  const [displayState, setDisplayState] = useState(false);

  return (
    <>
      <MyCourseListTable
        cookie={cookie}
        setCookie={setCookie}
        removeCookie={removeCookie}
      />

      <ViewCreateCoursePopup
        cookie={cookie}
        setCookie={setCookie}
        removeCookie={removeCookie}
        trigger={displayState}
        setTrigger={setDisplayState}
      />
    </>
  );
}

function ViewCreateCoursePopup(props) {
  return props.trigger ? (
    <div className="viewCreateCoursePopup">
      <div className="viewCreateCoursePopupContainer">
        <button
          className="closeCreateCoursePopup"
          onClick={() => props.setTrigger(false)}
        >
          <CloseOutlined />
        </button>

        <CreateCoursePopup
          trigger={props.trigger}
          setTrigger={props.setTrigger}
          cookie={props.cookie}
          setCookie={props.setCookie}
          removeCookie={props.removeCookie}
        />
      </div>
    </div>
  ) : (
    ""
  );
}

export function MyEnrollList({ cookie, setCookie, removeCookie }) {
  const [displayState, setDisplayState] = useState(false);

  return (
    <>
      <MyEnrollListTable
        cookie={cookie}
        setCookie={setCookie}
        removeCookie={removeCookie}
      />

      <ViewEnrollPopup
        cookie={cookie}
        setCookie={setCookie}
        removeCookie={removeCookie}
        trigger={displayState}
        setTrigger={setDisplayState}
      />
    </>
  );
}

function ViewEnrollPopup(props) {
  return props.trigger ? (
    <div className="viewCreateCoursePopup">
      <div className="viewCreateCoursePopupContainer">
        <button
          className="closeCreateCoursePopup"
          onClick={() => props.setTrigger(false)}
        >
          <CloseOutlined />
        </button>

        <CreateCoursePopup
          trigger={props.trigger}
          setTrigger={props.setTrigger}
          cookie={props.cookie}
          setCookie={props.setCookie}
          removeCookie={props.removeCookie}
        />
      </div>
    </div>
  ) : (
    ""
  );
}

export function EnrollReqComp() {
  return (
    <div className="tutorFeedWrapper">
      <div className="tutorFeedCard">
        <div className="tutorFeedTitle">
          <div className="tutorFeedTitleLeft">
            <div className="tutorFeedTitleName">Enrollment Requests</div>
            <div className="tutorFeedTitleBadge">{apptData.length}</div>
          </div>

          <div className="tutorFeedTitleRight">
            <TaskOutlined className="tutorFeedTitleIcon" />
          </div>
        </div>

        <div className="tutorFeedWidgetWrapper">
          <EnrReq />
        </div>
      </div>
    </div>
  );
}

export function MsgReqComp() {
  return (
    <div className="tutorFeed">
      <div className="tutorFeedWrapper">
        <div className="tutorFeedCard">
          <div className="tutorFeedTitle">
            <div className="tutorFeedTitleLeft">
              <div className="tutorFeedTitleName">Message Request</div>
              <div className="tutorFeedTitleBadge">{msgData.length}</div>
            </div>

            <div className="tutorFeedTitleRight">
              <ForumOutlined className="tutorFeedTitleIcon" />
            </div>
          </div>

          <div className="tutorFeedWidgetWrapper">
            <MsgReq />
          </div>
        </div>
      </div>
    </div>
  );
}

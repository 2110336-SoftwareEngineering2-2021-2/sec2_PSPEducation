import React, { useState, useEffect } from "react";
import "./notificationItem.css";
import { Link } from "react-router-dom";

var APIHandler = require("../../api/APIHandler");

export default function NotificationItem({
  header,
  body,
  type,
  description,
  isRead,
  notificationID,
  push,
  setPush,
}) {
  // console.log(description)

  let link = null;

  useEffect(() => {
    console.log(description);
  }, [link]);

  switch (type) {
    case "E1":
      link = `/tutor/enrollreq`;
      break;
    case "E2":
      link = `/course/${description.courseId}`;
      break;
    default:
      link = null;
      break;
  }

  return link ? (
    isRead ? (
      <div className="notificationItemWrapperWithRead">
        <Link className="notificationListItemText" to={link}>
          <span className="notificationHeader">{header}</span>
          <div className="notificationContent">
            <span className="notificationBody">{body}</span>
          </div>
        </Link>
      </div>
    ) : (
      <div className="notificationItemWrapperWithUnRead">
        <Link
          className="notificationListItemText"
          to={link}
          onClick={APIHandler.handleReadNotification(
            notificationID,
            push,
            setPush
          )}
        >
          <span className="notificationHeader">{header}</span>
          <div className="notificationContent">
            <span className="notificationBody">{body}</span>
          </div>
        </Link>
      </div>
    )
  ) : isRead ? (
    <div className="notificationItemWrapperWithRead">
      <span className="notificationHeader">{header}</span>
      <div className="notificationContent">
        <span className="notificationBody">{body}</span>
      </div>
    </div>
  ) : (
    <div className="notificationItemWrapperWithUnRead">
      <Link
        className="notificationListItemText"
        onClick={APIHandler.handleReadNotification(
          notificationID,
          push,
          setPush
        )}
      >
        <span className="notificationHeader">{header}</span>
        <div className="notificationContent">
          <span className="notificationBody">{body}</span>
        </div>
      </Link>
    </div>
  );
}

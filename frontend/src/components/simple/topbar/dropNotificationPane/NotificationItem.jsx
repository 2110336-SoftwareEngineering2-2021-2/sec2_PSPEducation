import React from "react";
import "./notificationItem.css";

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
  return (
    <div className="notificationItemWrapper">
      <span className="notificationHeader">{header}</span>
      <div className="notificationContent">
        <span className="notificationBody">{body}</span>
      </div>
    </div>
  );
}

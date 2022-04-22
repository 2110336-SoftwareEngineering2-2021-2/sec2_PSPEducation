import React, { useState, useEffect } from "react";
import "./dropNotificationPane.css";
import NotificationItem from "./NotificationItem";

var APIHandler = require("../../api/APIHandler");

export default function DropNotificationPane({
  trigger,
  setTrigger,
  cookie,
  setCookie,
  removeCookie,
}) {
  //   const [notification, setNotification] = useState(null);
  const [push, setPush] = useState(false);

  const [notificationData, setNotificationData] = useState([
    {
      _id: "",
      header: "",
      body: "",
      type: "",
      description: null,
      isRead: true,
      userId: "",
      notificationID: "",
    },
  ]);

  let notification = [
    {
      _id: "",
      header: "evermore",
      body: "long story short",
      type: "E1",
      description: null,
      isRead: true,
      userId: "62315665456",
      notificationID: "6265453432",
    },
    {
      _id: "",
      header: "Lover",
      body: "lover",
      type: "E1",
      description: null,
      isRead: true,
      userId: "62315665456",
      notificationID: "6265453432",
    },
  ];

  useEffect(() => {
    // APIHandler.handleGetNotification(setNotificationData, cookie.user);
  }, [push]);

  return trigger ? (
    <div className="dropNotificationPane">
      <span className="paneTitle">Notification</span>
      <div className="notificationList">
        {/* <div className="dropNotificationItem"> */}
        {notification &&
          notification.map((data, key) => {
            return (
              <NotificationItem
                key={key}
                header={data.header}
                body={data.body}
                type={data.type}
                description={data.description}
                isRead={data.isRead}
                userId={data.userId}
                notificationID={data._id}
                push={push}
                setPush={setPush}
              />
            );
          })}
        {/* </div> */}
      </div>
    </div>
  ) : (
    ""
  );
}

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

  const [notificationData, setNotificationData] = useState(null);

  useEffect(() => {
    APIHandler.handleGetNotification(setNotificationData, cookie.user);
  }, [push]);

  return trigger ? (
    <div className="dropNotificationPane">
      <span className="paneTitle">Notification</span>
      <div className="notificationList">
        <NotificationList
          notificationData={notificationData}
          push={push}
          setPush={setPush}
        />
      </div>
    </div>
  ) : (
    ""
  );
}

function NotificationList({ notificationData, push, setPush }) {
  return (
    <>
      {notificationData &&
        notificationData.map((data, key) => {
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
    </>
  );
}

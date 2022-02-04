import { React } from "react";
import "./msgReq.css";
import { msgData } from "../../../../dummyData";
import { MoreHorizOutlined } from "@mui/icons-material";

export const MsgReq = () => {
  return (
    <div className="messageList">
      {msgData.map((data, key) => {
        return (
          <Message
            key={key}
            fullname={data.fullname}
            username={data.username}
            content={data.content}
            imgURL={data.imgURL}
          />
        );
      })}
    </div>
  );
};

const Message = ({ fullname, username, content, imgURL }) => {
  if (!fullname) return <div />;
  return (
    <div className="messageCard">
      <img src={imgURL} alt="" className="appointmentAvatar" />
      <div className="messageInfo">
        <div className="messageSenderTitle">
          <div className="messageSenderFullname">{fullname}</div>
          <div className="messageSenderUsername">{username}</div>
        </div>
        <div className="messageContent">{content}</div>
      </div>
      <MoreHorizOutlined className="messageMoreIcon" />
    </div>
  );
};

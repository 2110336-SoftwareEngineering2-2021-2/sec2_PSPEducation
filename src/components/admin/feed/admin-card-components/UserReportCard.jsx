import React from "react";
import "./userReportCard.css";

export default function UserReportCard(props) {
  if (!props.header) return <div />;

  const imgTopicSrc = props.imgTopicURL;
  const imgBgReportSrc = props.imgBgURL;

  const imgBgStyle = {
    margin: "5px",
    height: "337px",
    position: "relative",
    background:
      "linear-gradient(" +
      "rgb(" +
      "102, 101, 101" +
      ")," +
      "transparent," +
      "rgb(" +
      "47, 47, 47" +
      "))," +
      "url(" +
      imgBgReportSrc +
      ")",
    "background-size": "cover",
    "border-radius": "20px",
  };

  return (
    <div className="userReportCard" style={imgBgStyle}>
      <div className="userReportCardContent">
        <div className="userReportCardImageContainer">
          <img
            src={imgTopicSrc}
            alt=""
            className="userReportCardImageAttached"
          />
        </div>
        <div className="userReportCardReportInfo">
          <span className="userReportCardHeader">{props.header}</span>
          <span className="userReportCardUserName">{props.username}</span>
          <span className="userReportCardDetail">{props.detail}</span>
        </div>

        <div className="userReportCardButton">
          <button className="userReportCardButtonView">add</button>
          <button className="userReportCardButtonRemove">dismiss</button>
        </div>
      </div>
    </div>
  );
}

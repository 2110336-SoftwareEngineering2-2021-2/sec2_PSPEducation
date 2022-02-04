import { React } from "react";
import "./adminCards.css";
import "./tutorValidationCard.css";
import "./userReportCard.css";
import { tutorValidationCardData, ReportCardData } from "../../../dummyData";

export default function Cards() {
  return (
    <div className="myCardList">
      {tutorValidationCardData.map((data, key) => {
        return (
          <TutorValidationCard
            key={key}
            fullname={data.fullname}
            username={data.username}
            profession={data.profession}
            imgAvatarURL={data.imgAvatarURL}
            imgBgURL={data.imgBgURL}
          />
        );
      })}
      {ReportCardData.map((data, key) => {
        return (
          <UserReportCard
            key={key}
            header={data.header}
            username={data.username}
            detail={data.detail}
            imgTopicURL={data.imgTopicURL}
            imgBgURL={data.imgBgURL}
          />
        );
      })}
    </div>
  );
}

function TutorValidationCard(props) {
  if (!props.fullname) return <div />;

  const imgAvatarSrc = props.imgAvatarURL;
  const imgBgTutorSrc = props.imgBgURL;

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
      imgBgTutorSrc +
      ")",
    "background-size": "cover",
    "border-radius": "20px",
  };

  console.log(imgBgStyle.background);

  return (
    <div className="tutorValidCard" style={imgBgStyle}>
      <div className="tutorValidCardContent">
        <div className="tutorValidCardImageContainer">
          <img
            src={imgAvatarSrc}
            alt=""
            className="tutorValidCardImageAvatar"
          />
        </div>
        <div className="tutorName">
          <span className="tutorFullName">{props.fullname}</span>
          <span className="tutorUserName">{props.username}</span>
          <span className="tutorProfession">{props.profession}</span>
        </div>

        <div className="tutorValidCardButton">
          <button className="tutorValidCardButtonView">view</button>
          <button className="tutorValidCardButtonRemove">remove</button>
        </div>
      </div>
    </div>
  );
}

function UserReportCard(props) {
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

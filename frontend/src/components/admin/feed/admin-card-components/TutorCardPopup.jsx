import React from "react";
import "./tutorCardPopup.css";
import { educationTable } from "../../../../dummyData";

var APIHandler = require("../../../simple/api/APIHandler");

export default function TutorCardPopup(props) {
  if (!props.firstname) return <div />;

  const imgAvatarSrc = props.imgAvatarURL;
  const imgBgTutorSrc = props.imgBgURL;
  const imgTutorCitizen = props.citizenImage;
  const educationLevel = educationTable[props.educationLevel];

  const imgBgStyle = {
    margin: "5px",
    height: "337px",
    position: "relative",
    background:
      "linear-gradient(" +
      "rgb(" +
      "102, 102, 102" +
      ")," +
      "transparent," +
      "rgb(" +
      "47, 47, 47" +
      "))," +
      "url(" +
      imgBgTutorSrc +
      ")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    backgroundSize: "cover",
    borderRadius: "20px",
  };

  return (
    <>
      <div className="tutorValidPopupCard" style={imgBgStyle}>
        <div className="tutorValidPopupCardContent">
          <div className="tutorValidPopupCardContentUpper">
            <div className="tutorValidPopupCardImageContainer">
              <img
                src={imgAvatarSrc}
                alt=""
                className="tutorValidPopupCardImageAvatar"
              />
            </div>
            <div className="tutorName">
              <span className="tutorFullName">
                {props.firstname} {props.lastname}
              </span>
              <span className="tutorUserName">{props.username}</span>
            </div>
          </div>

          <div className="tutorValidPopupCardContentLower">
            <div className="tutorValidPopupCardContentLowerLeft">
              <span className="tutorEmail">{props.email}</span>
              <span className="tutorEducation">{educationLevel}</span>
              <span className="tutorPhoneNumber">{props.phoneNumber}</span>
              <span className="tutorBirthdate">{props.birthdate}</span>
              <span className="tutorCitizenId">{props.citizenId}</span>
            </div>
            <div className="tutorValidPopupCardContentLowerRight">
              <div className="tutorCitizenImgContainer">
                <img src={imgTutorCitizen} alt="" className="tutorCitizenImg" />
              </div>
            </div>
          </div>

          <div className="tutorValidPopupCardButton">
            <button
              className="tutorValidPopupCardButtonApprove"
              onClick={() => {
                APIHandler.handleSetTutorValidStatus(
                  props.userId,
                  "approved",
                  props.push,
                  props.setPush
                );
              }}
            >
              approve
            </button>

            <button
              className="tutorValidPopupCardButtonRemove"
              onClick={() => {
                APIHandler.handleSetTutorValidStatus(
                  props.userId,
                  "rejected",
                  props.push,
                  props.setPush
                );
              }}
            >
              remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

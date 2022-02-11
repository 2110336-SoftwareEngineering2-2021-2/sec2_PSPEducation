import React, { useState } from "react";
import "./adminCards.css";
import TutorValidationCard from "./admin-card-components/TutorValidationCard";
import UserReportCard from "./admin-card-components/UserReportCard";
import { tutorValidationCardData, reportCardData } from "../../../dummyData";
import { CloseOutlined } from "@mui/icons-material";
import { Outlet } from "react-router-dom";

export default function AdminCards() {
  return (
    <div className="myCardList">
      <Outlet />
    </div>
  );
}

function ViewPopup(props) {
  return props.trigger ? (
    <div className="viewPopup">
      <div className="viewPopupContainer">
        <button className="closePopup" onClick={() => props.setTrigger(false)}>
          <CloseOutlined />
        </button>
        <div className="viewPopupContent">
          <span>{props.data.key}</span>
          <span>{props.data.fullname}</span>
          <span>{props.data.username}</span>
          <span>{props.data.profession}</span>
          <span>{props.data.imgAvatarURL}</span>
          <span>{props.data.imgBgURL}</span>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export function AllCards() {
  const [displayState, setDisplayState] = useState(false);
  const [dataValidation, setDataValidation] = useState({
    key: -1,
    fullname: "",
    username: "",
    profession: "",
    imgAvatarURL: "",
    imgBgURL: "",
  });
  return (
    <>
      {tutorValidationCardData.map((data, key) => {
        return (
          <TutorValidationCard
            key={key}
            fullname={data.fullname}
            username={data.username}
            profession={data.profession}
            imgAvatarURL={data.imgAvatarURL}
            imgBgURL={data.imgBgURL}
            setTriggerView={setDisplayState}
            setTriggerData={setDataValidation}
          />
        );
      })}
      {reportCardData.map((data, key) => {
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
      <ViewPopup
        data={dataValidation}
        trigger={displayState}
        setTrigger={setDisplayState}
      />
    </>
  );
}
export function TutorValidationCards() {
  const [displayState, setDisplayState] = useState(false);
  const [dataValidation, setDataValidation] = useState({
    key: -1,
    fullname: "",
    username: "",
    profession: "",
    imgAvatarURL: "",
    imgBgURL: "",
  });
  return (
    <>
      {tutorValidationCardData.map((data, key) => {
        return (
          <TutorValidationCard
            key={key}
            fullname={data.fullname}
            username={data.username}
            profession={data.profession}
            imgAvatarURL={data.imgAvatarURL}
            imgBgURL={data.imgBgURL}
            setTriggerView={setDisplayState}
            setTriggerData={setDataValidation}
          />
        );
      })}
      <ViewPopup
        data={dataValidation}
        trigger={displayState}
        setTrigger={setDisplayState}
      />
    </>
  );
}

export function UserReportCards() {
  return (
    <>
      {reportCardData.map((data, key) => {
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
    </>
  );
}

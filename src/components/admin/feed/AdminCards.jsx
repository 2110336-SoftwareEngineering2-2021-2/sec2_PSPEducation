import React, { useState } from "react";
import "./adminCards.css";
import TutorValidationCard from "./admin-card-components/TutorValidationCard";
import UserReportCard from "./admin-card-components/UserReportCard";
import TutorCardPopup from "./admin-card-components/TutorCardPopup";
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
        {/* <div className="viewPopupContent"> */}
        <TutorCardPopup
          firstname={props.data.firstname}
          lastname={props.data.lastname}
          username={props.data.username}
          email={props.data.email}
          phoneNumber={props.data.phoneNumber}
          displayNumber={props.data.displayNumber}
          birthdate={props.data.birthdate}
          gender={props.data.gender}
          educationLevel={props.data.educationLevel}
          citizenId={props.data.citizenId}
          citizenImage={props.data.citizenImage}
          profession={props.data.profession}
          imgAvatarURL={props.data.imgAvatarURL}
          imgBgURL={props.data.imgBgURL}
          setTriggerView={props.setDisplayState}
          setTriggerData={props.setDataValidation}
        />
      </div>
    </div>
  ) : (
    ""
  );
}

export function AllCards() {
  const [displayState, setDisplayState] = useState(false);
  const [dataValidation, setDataValidation] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    phoneNumber: "",
    displayNumber: "",
    birthdate: "",
    gender: "",
    educationLevel: "",
    citizenId: "",
    citizenImage: "",
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
            firstname={data.firstname}
            lastname={data.lastname}
            username={data.username}
            email={data.email}
            phoneNumber={data.phoneNumber}
            displayNumber={data.displayNumber}
            birthdate={data.birthdate}
            gender={data.gender}
            educationLevel={data.educationLevel}
            citizenId={data.citizenId}
            citizenImage={data.citizenImage}
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
        className=""
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
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    phoneNumber: "",
    displayNumber: "",
    birthdate: "",
    gender: "",
    educationLevel: "",
    citizenId: "",
    citizenImage: "",
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
            firstname={data.firstname}
            lastname={data.lastname}
            username={data.username}
            email={data.email}
            phoneNumber={data.phoneNumber}
            displayNumber={data.displayNumber}
            birthdate={data.birthdate}
            gender={data.gender}
            educationLevel={data.educationLevel}
            citizenId={data.citizenId}
            citizenImage={data.citizenImage}
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

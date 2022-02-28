import React, { useState, useEffect } from "react";
import "./adminCards.css";
import TutorValidationCard from "./admin-card-components/TutorValidationCard";
import UserReportCard from "./admin-card-components/UserReportCard";
import TutorCardPopup from "./admin-card-components/TutorCardPopup";
import { tutorValidationCardData, reportCardData } from "../../../dummyData";
import { CloseOutlined } from "@mui/icons-material";
import { Outlet } from "react-router-dom";

var APIHandler = require("../../simple/api/APIHandler");

export default function AdminCards() {
  return (
    <div className="myCardList">
      <Outlet />
    </div>
  );
}

export function AllCards({ cookie, setCookie, removeCookie }) {
  const [displayState, setDisplayState] = useState(false);

  const [tutorValidData, setTutorValidData] = useState([
    {
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
    },
  ]);

  const [reportData, setReportData] = useState([
    {
      title: "",
      type: 0,
      status: "",
      username: "",
      userId: "",
      detail: "",
      picture: "",
      imgTopicURL: "",
      imgBgURL: "",
    },
  ]);

  useEffect(() => {
    APIHandler.handleGetTutorValidCard(tutorValidData, setTutorValidData);
    APIHandler.handleGetReportCard(reportData, setReportData);
    console.log("tutorValidData", tutorValidData);
    console.log("reportData", reportData);
  }, []);

  return (
    <>
      {tutorValidData.map((data, key) => {
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
            setTriggerData={setTutorValidData}
          />
        );
      })}
      {reportData.map((data, key) => {
        return (
          <UserReportCard
            key={key}
            title={data.title}
            username={data.username}
            userId={data.userId}
            detail={data.detail}
            imgTopicURL={data.picture[0]}
            imgBgURL={data.picture[1]}
          />
        );
      })}
      <ViewPopup
        className=""
        data={tutorValidData}
        trigger={displayState}
        setTrigger={setDisplayState}
      />
    </>
  );
}

export function TutorValidationCards({ cookie, setCookie, removeCookie }) {
  const [push, setPush] = useState(false);
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
  const [tutorValidData, setTutorValidData] = useState([
    {
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
    },
  ]);

  useEffect(() => {}, []);

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
      {tutorValidData.map((data, key) => {
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
            setTriggerData={setTutorValidData}
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

export function UserReportCards({ cookie, setCookie, removeCookie }) {
  const [push, setPush] = useState(false);
  const [displayState, setDisplayState] = useState(false);
  const [reportData, setReportData] = useState([
    {
      title: "",
      type: 0,
      status: "",
      username: "",
      userId: "",
      detail: "",
      picture: "",
      imgTopicURL: "",
      imgBgURL: "",
    },
  ]);

  return (
    <>
      {reportCardData.map((data, key) => {
        return (
          <UserReportCard
            key={key}
            title={data.title}
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

function ViewPopup(props) {
  return props.trigger ? (
    <div className="viewPopup">
      <div className="viewPopupContainer">
        <button className="closePopup" onClick={() => props.setTrigger(false)}>
          <CloseOutlined />
        </button>
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

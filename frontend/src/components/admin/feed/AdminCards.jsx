import React, { useState, useEffect } from "react";
import "./adminCards.css";
import TutorValidationCard from "./admin-card-components/TutorValidationCard";
import UserReportCard from "./admin-card-components/UserReportCard";
import TutorCardPopup from "./admin-card-components/TutorCardPopup";
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

  const [tutorValidData, selectTutorValid] = useState([
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

  const [tutorValid, setTutorValid] = useState(null);
  const [report, setReport] = useState(null);
  const [push, setPush] = useState(false);

  // useEffect(() => {
  //   console.log("tutorValid:", tutorValid);
  // }, [tutorValid]);

  // useEffect(() => {
  //   console.log("report:", report);
  // }, [report]);

  useEffect(() => {
    setTutorValid(null);
    setReport(null);
    setTimeout(() => {
      APIHandler.handleFetchTutorValidCard(tutorValid, setTutorValid);
      APIHandler.handleFetchReportCard(report, setReport);
    }, 500);
  }, [push]);

  return (
    <>
      {tutorValid &&
        tutorValid.map((data, key) => {
          return (
            <TutorValidationCard
              key={key}
              cookie={cookie}
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
              imgAvatarURL={data.picture[0]}
              imgBgURL={data.picture[1]}
              userId={data._id}
              setTriggerView={setDisplayState}
              setTriggerData={selectTutorValid}
              push={push}
              setPush={setPush}
            />
          );
        })}
      {report &&
        report.map((data, key) => {
          return (
            <UserReportCard
              key={key}
              title={data.title}
              username={data.username}
              detail={data.detail}
              imgTopicURL={data.picture[0]}
              imgBgURL={data.picture[1]}
              reportID={data._id}
              push={push}
              setPush={setPush}
            />
          );
        })}

      <ViewPopup
        data={tutorValidData}
        trigger={displayState}
        setTrigger={setDisplayState}
        push={push}
        setPush={setPush}
      />
    </>
  );
}

export function TutorValidationCards({ cookie, setCookie, removeCookie }) {
  const [displayState, setDisplayState] = useState(false);

  const [tutorValidData, selectTutorValid] = useState([
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

  const [tutorValid, setTutorValid] = useState(null);

  const [push, setPush] = useState(false);

  // useEffect(() => {
  //   console.log("tutorValid:", tutorValid);
  // }, [tutorValid]);

  useEffect(() => {
    setTutorValid(null);
    setTimeout(() => {
      APIHandler.handleFetchTutorValidCard(tutorValid, setTutorValid);
    }, 500);
  }, [push]);

  return (
    <>
      {tutorValid &&
        tutorValid.map((data, key) => {
          return (
            <TutorValidationCard
              key={key}
              cookie={cookie}
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
              imgAvatarURL={data.picture[0]}
              imgBgURL={data.picture[1]}
              userId={data._id}
              setTriggerView={setDisplayState}
              setTriggerData={selectTutorValid}
              push={push}
              setPush={setPush}
            />
          );
        })}

      <ViewPopup
        data={tutorValidData}
        trigger={displayState}
        setTrigger={setDisplayState}
        push={push}
        setPush={setPush}
      />
    </>
  );
}

export function UserReportCards({ cookie, setCookie, removeCookie }) {
  const [report, setReport] = useState(null);

  const [push, setPush] = useState(false);

  useEffect(() => {
    console.log("report:", report);
  }, [report]);

  useEffect(() => {
    setReport(null);
    setTimeout(() => {
      APIHandler.handleFetchReportCard(report, setReport);
    }, 500);
  }, [push]);

  return (
    <>
      {report &&
        report.map((data, key) => {
          return (
            <UserReportCard
              key={key}
              title={data.title}
              username={data.username}
              detail={data.detail}
              imgTopicURL={data.picture[0]}
              imgBgURL={data.picture[1]}
              reportID={data._id}
              push={push}
              setPush={setPush}
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
          userId={props.data.userId}
          setTriggerView={props.setDisplayState}
          setTriggerData={props.setDataValidation}
          push={props.push}
          setPush={props.setPush}
        />
      </div>
    </div>
  ) : (
    ""
  );
}

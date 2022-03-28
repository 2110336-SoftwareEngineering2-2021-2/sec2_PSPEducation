import React from "react";
import "./searchResultCard.css";
import { PeopleAltSharp } from "@mui/icons-material";
import { Link } from "react-router-dom";

var APIHandler = require("../api/APIHandler");

export default function SearchResultCard({
  courseName,
  subject,
  description,
  price,
  tutorName,
  location,
  studentN,
  capacity,
  courseID,
  push,
  setPush,
}) {
  //   if (!title) return <div />;

  const imgBgSrc =
    "https://t3.ftcdn.net/jpg/03/35/13/14/360_F_335131435_DrHIQjlOKlu3GCXtpFkIG1v0cGgM9vJC.webp";
  return (
    <Link to={`/course/${courseID}`} className="CardLink">
      <div className="searchCourseCard">
        <div className="searchCourseCardImageContainer">
          <img
            src={imgBgSrc}
            alt=""
            className="searchCourseCardImageAttached"
          />
        </div>
        <div className="searchCourseCardContent">
          <span className="searchCourseCardCourseName">{courseName}</span>
          <div className="searchCourseCardSubject">{subject}</div>
          <span className="searchCourseCardDescriptionWrapper">
            <div className="searchCourseCardDescription">{description}</div>
          </span>
          <div className="searchCourseCardContentSubLine">
            <span className="searchCourseCardPrice">฿{price}</span>
            <div className="searchCourseCardCapacity">
              <span className="searchCourseCardCapacityText">
                {studentN}/{capacity}
              </span>
              &nbsp;
              <PeopleAltSharp
                sx={{ fontSize: 20 }}
                className="searchCourseCardPeopleIcon"
              />
            </div>
          </div>
          <div className="searchCourseCardContentSubLine">
            <span className="searchCourseCardLocation">@{location}</span>
            <span className="searchCourseCardTutorName">{tutorName}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

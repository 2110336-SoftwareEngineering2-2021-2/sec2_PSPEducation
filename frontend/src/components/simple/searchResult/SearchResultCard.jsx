import React from "react";
import "./searchResultCard.css";
import { PeopleAltSharp } from "@mui/icons-material";
import axios from "axios";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";

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
    "https://shoponline.ondemand.in.th/media/catalog/product/cache/1c118d590e69f34df60e9e8a662b5ef7/8/3/8309_upskill__2_1.jpg";

  return (
    <div className="searchCourseCard">
      <div className="searchCourseCardImageContainer">
        <img src={imgBgSrc} alt="" className="searchCourseCardImageAttached" />
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
              classname="searchCourseCardPeopleIcon"
            />
          </div>
        </div>
        <div className="searchCourseCardContentSubLine">
          <span className="searchCourseCardLocation">@{location}</span>
          <span className="searchCourseCardTutorName">
            -tutorName-{tutorName}
          </span>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import "./descriptProfile.css";
import axios from "axios";
import { courseData } from "../../../dummyData";
import { FormControl, Select, Box, InputLabel, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";


// var APIHandler = require("../../../simple/api/APIHandler");

export default function DescriptProfile(props) {
  // console.log(props.data.status==="unpublished")
  const { cookie, setCookie, removeCookie, isWaiting, isApproved, enrollId, setPush, push } = props;
console.log(isWaiting)
  const handleEnroll = (event) => {
    axios.post(`http://localhost:3000/enroll`, {
      studentId: cookie.user,
      courseId: props.data._id
    }, {
      withCredentials: true,
    });
    setPush(true);
  };

  const handleCancel = (event) => {
    axios.patch(`http://localhost:3000/enroll/cancel/${enrollId}`, {}, {
      withCredentials: true,
    });
    setPush(true);
  };

  return (
    <>
    
      <div>
        <img src={courseData.imgURL} alt="" className="CourseImageContainer" />
      </div>
      <label>
        {" "}
        Description:
        <div className="courseDescription">{props.data.description}</div>
      </label>
      <Link to={`/${cookie.user_role}/search`}>
      {cookie.user_role === "student" && isWaiting && (
        <div>
          <button className="courseCancelButton" onClick={handleCancel}>Cancel</button>
        </div>
      )}
      {cookie.user_role === "student" && isApproved &&(
        <div>
          <button className="courseButton" disabled={true} >Approved</button>
        </div>
      )}
      {cookie.user_role === "student" && !isApproved && !isWaiting && (
        <div>
          <button className="courseButton" disabled={props.data.status==="unpublished"} onClick={handleEnroll}>
            Enroll</button>
        </div>
      )}
      </Link>
    </>
  );
}
  
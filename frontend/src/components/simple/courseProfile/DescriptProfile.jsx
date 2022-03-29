import React, { useState, useEffect } from "react";
import "./descriptProfile.css";
import axios from "axios";
import { courseData } from "../../../dummyData";
import { FormControl, Select, Box, InputLabel, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

// var APIHandler = require("../../../simple/api/APIHandler");

export default function DescriptProfile({
  data,
  cookie,
  setCookie,
  removeCookie,
  isWaiting,
  isApproved,
  enrollId,
  setPush,
  push,
}) {
  const handleEnroll = async (event) => {
    console.log(event)
    await axios.post(
      `http://localhost:3000/enroll`,
      {
        studentId: cookie.user,
        courseId: data._id,
      },
      {
        withCredentials: true,
      }
    );
    setPush(!push);
  };

  const handleCancel = async (event) => {
    await axios.patch(
      `http://localhost:3000/enroll/cancel/${enrollId}`,
      {},
      {
        withCredentials: true,
      }
    );
    setPush(!push);
  };

  console.log("data",data._id);
  console.log("cookie",cookie);

  return (
    <>
      <div>
        <img src={courseData.imgURL} alt="" className="CourseImageContainer" />
      </div>
      <label>
        {" "}
        Description:
        <div className="courseDescription">{data.description}</div>
      </label>
      <Link to={`/${cookie.user_role}/search`}>
        {cookie.user_role === "student" && isWaiting && (
          <div>
            <button className="courseCancelButton" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        )}
        {cookie.user_role === "student" && isApproved && (
          <div>
            <button className="courseButton" disabled={true}>
              Approved
            </button>
          </div>
        )}
        {cookie.user_role === "student" && !isApproved && !isWaiting && (
          <div>
            <button
              className="courseButton"
              disabled={data.status === "unpublished"}
              onClick={handleEnroll}
            >
              Enroll
            </button>
          </div>
        )}
      </Link>
    </>
  );
}

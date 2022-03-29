import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import "./courseProfileCard.css";
import axios from "axios";
import { courseData } from "../../dummyData";
import DescriptProfile from "./courseProfile/DescriptProfile";
import NormalProfile from "./courseProfile/NormalProfile";
import { FormControl, Select, Box, InputLabel, MenuItem } from "@mui/material";

var APIHandler = require("./api/APIHandler");

export default function CourseProfileCard(props) {
  let { id } = useParams();
  const { cookie, setCookie, removeCookie } = props;
  const [push, setPush] = useState(false);
  const [change, setChange] = useState(false);

  const [enrolls, setEnroll] = useState(null);
  const [isWaiting, setIsWaiting] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [enrollId, setEnrollId] = useState("");

  // useEffect(() => {
  //   APIHandler.handleFetchEnroll(cookie, setEnroll);
  //   setChange(!change)

  // }, [push]);

  const [desc, setDesc] = useState({});

  // useEffect(() => {
  //   // Update the document title using the browser API
  //   setDesc(data)
  // }, [data]);

  function fetch() {
    axios
    .get(`http://localhost:3000/course/${id}`, {
      withCredentials: true,
    })
    .then((response) => {
        setDesc(response.data);
        // console.log(desc);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  useEffect(() => {
    fetch();
    APIHandler.handleFetchEnroll(cookie, setEnroll);
    setChange(!change)

  }, [push]);

  useEffect(() => {
    // console.log(enrolls);
    if (enrolls){
      enrolls.filter(enroll => desc._id===enroll.courseId && enroll.status === "waiting").map(filteredEnroll => (
        setIsWaiting(true),
        setEnrollId(filteredEnroll._id)
      ))
      enrolls.filter(enroll => desc._id===enroll.courseId && enroll.status === "approved").map(filteredEnroll => (
        setIsApproved(true)
      ))
    }

  }, [desc, enrolls, change]);

  return (
    <>
      <div className="courseProfile">
        <div className="courseProfileTitle">Course Profile</div>
        <div className="row">
          <div className="leftColumn">
            <DescriptProfile
              data={desc}
              cookie={cookie}
              setCookie={setCookie}
              removeCookie={removeCookie}
              isWaiting={isWaiting}
              isApproved={isApproved}
              enrollId={enrollId}
              setPush={setPush}
              push={push}
            />
          </div>
          <div className="rightColumn">
            <NormalProfile data={desc} />
          </div>
        </div>
      </div> 
    </>
  );
}
  
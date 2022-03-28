import React, { useState, useEffect } from "react";
import "./normalProfile.css";
import axios from "axios";
import { courseData } from "../../../dummyData";
import { FormControl, Select, Box, InputLabel, MenuItem } from "@mui/material";
  
  // var APIHandler = require("../../../simple/api/APIHandler");
  
export default function NormalProfile(props) {
  // const { data } = courseData;
  // console.log(data)
  // const imgAvatarSrc = props.imgAvatarURL;
  // const imgBgTutorSrc = props.imgBgURL;

  // const [desc, setDesc] = useState({});
  
  // useEffect(() => { 
  //   // if (firstFetch)
  //   setDesc(courseData)
  //   console.log(desc)
  // }, [desc] )
    
  // useEffect(() => {
  //   // Update the document title using the browser API
  //   console.log(updateSuccess);
  // }, [updateSuccess]);
  
  // const handleUpdate = (event) => {
  //    console.log(profile);
  //   axios.patch(`http://localhost:3000/auth/user/${props.id}`, profile, {
  //     withCredentials: true,
  //   });
  //   setUpdateSuccess(true);
  // };
  
  // const handleChange = (prop) => (event) => {
  //   setProfile({
  //      ...profile,
  //      [prop]: event.target.value,
  //    });
  //   //  console.log(profile);
  //   };
  
   return (
   <>
      {/* <div className="manageProfileTitle">{profile}</div> */}

     <div>
        <Box sx={{ minWidth: 120 }}>
        <InputLabel id="CourseName">Course name</InputLabel>
          <div className="courseName">{props.data.courseName}</div>  
        <InputLabel id="Subject">Subject</InputLabel>
          <div className="courseSubject">{props.data.subject}</div>
        <InputLabel id="Lesson">Lesson</InputLabel>
          <div className="courseLesson">{props.data.lesson}</div>
        <InputLabel id="Price">Price</InputLabel>
          <div className="coursePrice">{props.data.price}</div>
        <InputLabel id="Hour">Hour</InputLabel>
          <div className="courseHour">{props.data.hour}</div>
        <InputLabel id="Capacity">Capacity</InputLabel>
          <div className="courseCapacity">{props.data.capacity}</div>
        <InputLabel id="LearningType">Learning Type</InputLabel>
          <div className="courseLearningType">{props.data.learningType}</div>
        <InputLabel id="Location">Location</InputLabel>
          <div className="courseLocation">{props.data.location}</div>
        <InputLabel id="Status">Status</InputLabel>
          <div className="courseStatus">{props.data.status}</div>
        </Box>
    </div>
  </>);
}
  
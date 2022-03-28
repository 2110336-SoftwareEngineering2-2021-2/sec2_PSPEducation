import React, { useState, useEffect } from "react";
import "./descriptProfile.css";
import axios from "axios";
import { courseData } from "../../../dummyData";
import { FormControl, Select, Box, InputLabel, MenuItem } from "@mui/material";
  
  // var APIHandler = require("../../../simple/api/APIHandler");
  
export default function DescriptProfile(props) {
  console.log(props.data)
  const { cookie, setCookie, removeCookie } = props
  console.log(cookie)
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
         <img
            src={courseData.imgURL}
            alt=""
            className="CourseImageContainer"
          />
        </div>
        <label> Description:
         <div className="courseDescription">{props.data.description}</div>
        </label>
        {cookie.user_role=="student" && (<div>
        <button className="courseButton">
            Enroll
          </button>
        </div>
        )}
  </>);
}
  
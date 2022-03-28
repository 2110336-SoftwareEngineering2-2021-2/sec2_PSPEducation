import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import "./courseProfileCard.css";
import axios from "axios";
import { courseData } from "../../dummyData";
import DescriptProfile from "./courseProfile/DescriptProfile";
import NormalProfile from "./courseProfile/NormalProfile";
import { FormControl, Select, Box, InputLabel, MenuItem } from "@mui/material";
  
  // var APIHandler = require("../../../simple/api/APIHandler");
  
export default function CourseProfileCard(props) {
  let { id } = useParams();
  const { cookie, setCookie, removeCookie } = props
  console.log(cookie)
  // console.log(data)
  // const imgAvatarSrc = props.imgAvatarURL;
  // const imgBgTutorSrc = props.imgBgURL;

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
    // console.log(desc);
  }, []);
  useEffect(() => {
    // console.log(desc);
  }, [desc]);
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
    <div className="courseProfile">
    <div className="courseProfileTitle">Course Profile</div>
    <div className="row">
        <div className="leftColumn">
          <DescriptProfile
            data={desc}
            cookie={cookie}
            setCookie={setCookie}
            removeCookie={removeCookie}/>
        </div>
        <div className="rightColumn">
          <NormalProfile
            data={desc}/>
        </div>
    </div>
    </div>
  </>);
}
  
import React, { useState, useEffect } from "react";
import "./manageProfile.css";
import axios from "axios";

import { FormControl, Select, Box, InputLabel, MenuItem } from "@mui/material";
  
  // var APIHandler = require("../../../simple/api/APIHandler");
  
export default function ManageProfile(props) {
  const { data, id, setTrigger} = props;
  const educationOption = [
    {
      value: 0,
      label: "Not Defined",
    },
    {
      value: 1,
      label: "Pre-school",
    },
    {
      value: 2,
      label: "Primary1-3",
    },
    {
      value: 3,
      label: "Primary4-6",
    },
    {
      value: 4,
      label: "Secondary1-3",
    },
    {
      value: 5,
      label: "Secondary4-6",
    },
    {
      value: 6,
      label: "Bachelor's Degree",
    },
    {
      value: 7,
      label: "Master's Degree",
    },
    {
      value: 8,
      label: "PhD",
    },
  ];
  
    // console.log(data)
  
  const [profile, setProfile] = useState({});
  
  const [updateSuccess, setUpdateSuccess] = useState(false);
  
  
  useEffect(() => { 
    // if (firstFetch)
    setProfile(data)
    console.log(props)
  }, [data] )
    
  useEffect(() => {
    // Update the document title using the browser API
    console.log(updateSuccess);
  }, [updateSuccess]);
  
  const handleUpdate = (event) => {
     console.log(profile);
    axios.patch(`http://localhost:3000/auth/user/${props.id}`, profile, {
      withCredentials: true,
    });
    setUpdateSuccess(true);
  };
  
  const handleChange = (prop) => (event) => {
    setProfile({
       ...profile,
       [prop]: event.target.value,
     });
    //  console.log(profile);
    };
  
   return (
   <>
      {/* <div className="manageProfileTitle">{profile}</div> */}

     {profile &&(<div className="manageProfile">
       <div className="manageProfileTitle">Edit Profile</div>
       <Box
         component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "500px" },
        }}
        noValidate
        autoComplete="off"
        spellCheck="false"
      >
        <div className="manageProfileForm">
        <Box sx={{ minWidth: 120 }}>
        <InputLabel id="Firstname">Firstname</InputLabel>
           <input
            className="manageProfileFormCourseName"
            type="text"
            label="Firstname"
            value={profile.firstname}
            onChange={handleChange("firstname")}
          />
          <InputLabel id="Lastname">Lastname</InputLabel>
          <input
            className="manageProfileFormSubject"
            type="text"
            label="Lastname"
            value={profile.lastname}
            onChange={handleChange("lastname")}
           />
          <InputLabel id="phoneNumber">Phone number</InputLabel>
          <input
            className="manageProfileFormLesson"
            type="text"
            label="Phone number"
            value={profile.phoneNumber}
            onChange={handleChange("phoneNumber")}
          />
          <InputLabel id="username">Username</InputLabel>
          <input
            className="manageProfileFormUsername"
            type="text"
            label="username"
            value={profile.username}
            onChange={handleChange("username")}
          />
          <InputLabel id="email">Email</InputLabel>
          <input
            className="manageProfileFormEmail"
            type="text"
            label="email"
            value={profile.email}
            onChange={handleChange("email")}
          />
          <InputLabel id="displayName">Display name</InputLabel>
          <input
            className="manageProfileFormDisplayName"
            type="text"
            label="Display name"
            value={profile.displayName}
            onChange={handleChange("displayName")}
          />
            <InputLabel id="birthdate">Birthdate</InputLabel>
            <input
              className="manageProfileFormBirthdate"
              id="Birthdate"
              type="date"
              value={profile.birthdate}
              onChange={handleChange("birthdate")}
            />
            <InputLabel id="gender-select-label">
              gender
            </InputLabel>
            <Select
              labelId="gender-simple-select-label"
              id="gender-select-label"
              className="manageProfileFormGender"
              value={profile.gender}
              label="Gender"
              onChange={handleChange("gender")}
            >
              <MenuItem value="male">male</MenuItem>
              <MenuItem value="female">female</MenuItem>
              <MenuItem value="other">other</MenuItem>
            </Select>
            <InputLabel id="educationLevel-select-label">Education Level</InputLabel>
            <Select
              labelId="educationLevel-simple-select-label"
              id="educationLevel-select-label"
              className="manageProfileFormEducationLevel"
              value={profile.educationLevel}
              label="Education Level"
              onChange={handleChange("educationalLevel")}
            >
              {educationOption.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </Box>
          <button className="manageProfileFormSubmit" onClick={handleUpdate}>
            update
          </button>
        </div>
      </Box>
    </div>)}
  </>);
}
  
import React, { useState, useEffect } from "react";
import "./manageProfile.css";
import axios from "axios";

import { FormControl, Select, Box, InputLabel, MenuItem } from "@mui/material";
  
  // var APIHandler = require("../../../simple/api/APIHandler");
  
export default function ChangePasswordCard(props) {
  // const { data, id, setTrigger} = props;
  
    // console.log(data)
  
  const [password, setPassword] = useState({});
  
  const [updateSuccess, setUpdateSuccess] = useState(false);
  
  
  // useEffect(() => { 
  //   // if (firstFetch)
  //   setPassword(data)
  //   console.log(data.password)
  // }, [data] )
    
  useEffect(() => {
    // Update the document title using the browser API
    console.log(updateSuccess);
  }, [updateSuccess]);
  
  const handleUpdate = (event) => {
     console.log(password);
    axios.patch(`http://localhost:3000/auth/user/${props.id}/password`, password, {
      withCredentials: true,
    });
    setUpdateSuccess(true);
  };
  
  const handleChange = (prop) => (event) => {
    console.log(password)
    setPassword({
       ...password,
       [prop]: event.target.value,
     });
    //  console.log(profile);
    };
  
   return (
   <>
      {/* <div className="manageProfileTitle">{profile}</div> */}

     {password &&(<div className="manageProfile">
       <div className="manageProfileTitle">Change Password</div>
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
        <InputLabel id="oldPassword">Old password</InputLabel>
           <input
            className="manageProfileFormCourseName"
            type="password"
            label="oldPassword"
            value={password.oldPassword}
            onChange={handleChange("oldPassword")}
          />
          <InputLabel id="newPassword">New password</InputLabel>
           <input
            className="manageProfileFormCourseName"
            type="password"
            label="newPassword"
            value={password.newPassword}
            onChange={handleChange("newPassword")}
          />
          <InputLabel id="confirmNewPassword">Confirm new password</InputLabel>
           <input
            className="manageProfileFormCourseName"
            type="password"
            label="confirmNewPassword"
            value={password.confirmNewPassword}
            onChange={handleChange("confirmNewPassword")}
          />
          </Box>
          <button className="manageProfileFormSubmit" onClick={handleUpdate}>
            update
          </button>
        </div>
      </Box>
    </div>)}
  </>);
}
  
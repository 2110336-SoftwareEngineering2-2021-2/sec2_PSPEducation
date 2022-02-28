import React, { useState, useEffect } from "react";
import "./myProfile.css";
import { CloseOutlined, AddCircle } from "@mui/icons-material";
import ManageProfile from "./ManageProfile";
import axios from "axios";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";

export default function MyProfile({ cookie, setCookie, removeCookie }) {
  // const [profile, setProfile] = useState({});
  // const [state, setState] = useState(false);
  const [displayStateEdit, setDisplayStateEdit] = useState(false);
  const [displayStatePassword, setDisplayStatePassword] = useState(false);
  const [data, setData] = useState({});

  function educationalLevelToText(educationalLevel) {
    if (educationalLevel === 0) return "Not Defined";
    else if (educationalLevel === 1) return "Pre-school";
    else if (educationalLevel === 2) return "Primary1-3";
    else if (educationalLevel === 3) return "Primary4-6";
    else if (educationalLevel === 4) return "Secondary1-3";
    else if (educationalLevel === 5) return "Secondary4-6";
    else if (educationalLevel === 6) return "Bachelor's Degree";
    else if (educationalLevel === 7) return "Master's Degree";
    else if (educationalLevel === 8) return "PhD";
  }

  function EditPopup(props) {
    // console.log(props)
    return props.trigger ? (
      <div className="viewEditPopup">
        <div className="viewEditPopupContainer">
          <button
            className="closeEditPopup"
            onClick={() => props.setTrigger(false)}
          >
            <CloseOutlined />
          </button>
          <ManageProfile
            id={props.id}
            data={props.data}
            setTrigger={props.setTrigger}
          />
        </div>
      </div>
    ) : (
      ""
    );
  }
  function ChangePasswordPopup(props) {
    // console.log(props)
    return props.trigger ? (
      <div className="viewEditPopup">
        <div className="viewEditPopupContainerPassword">
          <button
            className="closeEditPopup"
            onClick={() => props.setTrigger(false)}
          >
            <CloseOutlined />
          </button>
          <ChangePasswordCard
            id={props.id}
            data={props.data}
            setTrigger={props.setTrigger}
          />
        </div>
      </div>
    ) : (
      ""
    );
  }

  function fetch() {
    axios
      .get(`http://localhost:3000/auth/user/${cookie.user}`, {
        withCredentials: true,
      })
      .then((response) => {
        setData(response.data);
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  useEffect(() => {
    fetch();
    console.log(data);
  }, []);

  return (
    <div className="profilePage">
      <div className="profileTitle"> My Profile </div>
      <Box
        className="profileBox"
        // component="span"
        sx={{
          width: 500,
          backgroundColor: "primary.dark",
          "& .MuiTextField-root": { m: 1, width: "500px", minWidth: 120 },
        }}
      >
        <TextField
          className="profileDiaplayName"
          type="text"
          value={data.displayName}
          label="Display Name"
          disabled="Disabled"
          fullWidth
        />
        <TextField
          className="profileUsername"
          type="text"
          value={data.username}
          label="Username"
          disabled="Disabled"
          fullWidth
        />
        <TextField
          className="profileFirstname"
          type="text"
          value={data.firstname}
          label="Firstname"
          disabled="Disabled"
          fullWidth
        />
        <TextField
          className="profileLastname"
          type="text"
          value={data.lastname}
          label="Lastname"
          disabled="Disabled"
          fullWidth
        />
        <TextField
          className="profileGender"
          type="text"
          value={data.gender}
          label="Gender"
          disabled="Disabled"
          fullWidth
        />
        <TextField
          className="profileCitizenId"
          type="text"
          value={data.citizenId}
          label="Citizen ID"
          disabled="Disabled"
          fullWidth
        />
        <TextField
          className="profileBirthdate"
          type="text"
          value={data.birthdate}
          label="Birthdate"
          disabled="Disabled"
          fullWidth
        />
        <TextField
          className="profileEmail"
          type="text"
          value={data.email}
          label="Email"
          disabled="Disabled"
          fullWidth
        />
        <TextField
          className="profilePhoneNumber"
          type="text"
          value={data.phoneNumber}
          label="Phone Number"
          disabled="Disabled"
          fullWidth
        />
        <TextField
          className="profileEducationLevel"
          type="text"
          value={educationalLevelToText(data.educationalLevel)}
          label="Education Level"
          disabled="Disabled"
          fullWidth
        />
        <button
          className="editButton"
          onClick={() => {
            setDisplayStateEdit(true);
          }}
        >
          Edit
        </button>

        <button
          className="changePasswordButton"
          onClick={() => {
            setDisplayStatePassword(true);
          }}
        >
          Change Password
        </button>

        <EditPopup
          className=""
          trigger={displayStateEdit}
          setTrigger={setDisplayStateEdit}
          data={data}
          id={cookie.user}
        />

        <ChangePasswordPopup
          className=""
          trigger={displayStatePassword}
          setTrigger={setDisplayStatePassword}
          data={data}
          id={cookie.user}
        />
      </Box>
    </div>
  );
}

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
  const [displayState, setDisplayState] = useState(false);

  const [data, setData] = useState({});

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
  // const fetch = async () => {
  //     try {
  //         axios
  //         .get(`http://localhost:3000/auth/user/${cookie.user}`, {
  //           withCredentials: true,
  //         })
  //         .then((response) => {
  //           setData(response.data)
  //           console.log(data)
  //         })
  //         .catch((e) => {
  //           console.log(e);
  //         });
  //     } catch(err) {
  //       // error handling code
  //     }
  //   }

  useEffect(() => {
    fetch();
    console.log(data);
  }, []);

  return (
    <div className="profilePage">
      <div className="profileTitle"> My Profile </div>
      <Box
        className="profileBox"
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
          value={data.educationalLevel}
          label="Education Level"
          disabled="Disabled"
          fullWidth
        />

        <button
          className="editButton"
          onClick={() => {
            setDisplayState(true);
          }}
        >
          Edit
        </button>

        <EditPopup
          className=""
          trigger={displayState}
          setTrigger={setDisplayState}
          data={data}
          id={cookie.user}
        />
      </Box>
    </div>
  );
}

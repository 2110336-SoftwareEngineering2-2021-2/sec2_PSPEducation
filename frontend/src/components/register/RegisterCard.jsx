import React, { useState, useEffect } from "react";
import "./registerCard.css";
import { Box, InputLabel, TextField, MenuItem } from "@mui/material";
import DateAdapter from "@mui/lab/AdapterDateFns";
import { LocalizationProvider, DatePicker } from "@mui/lab";
import axios from "axios";
import sha512_256 from "js-sha512";
import { Navigate } from "react-router-dom";
import { format } from "date-fns";

const userTypeOption = [
  {
    value: "student",
    label: "Student",
  },
  {
    value: "tutor",
    label: "Tutor",
  },
];

const genderOption = [
  {
    value: "male",
    label: "Male",
  },
  {
    value: "female",
    label: "Female",
  },
  {
    value: "other",
    label: "Other",
  },
];

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

export default function RegisterCard() {
  const [values, setValues] = useState({
    userType: "",
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    phoneNumber: "",
    displayName: "",
    password: "",
    passwordConfirm: "",
    gender: "",
    educationalLevel: "",
    citizenId: "",
  });

  const [birthdate, setBirthdate] = useState(new Date());

  const [isError, setIsError] = useState("");

  const [registerSuccess, setRegisterSuccess] = useState(false);

  const handleChange = (prop) => (event) => {
    setValues({
      ...values,
      [prop]: event.target.value,
    });
    // console.log(values);
    if (values.password !== event.target.value) {
      setIsError("The password doesn't match.");
    } else {
      setIsError("");
    }
  };

  const [profileImage, setProfileImage] = useState("");

  const onProfileImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setProfileImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const [citizenImage, setCitizenImage] = useState("");

  const onCitizenImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setCitizenImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const [imageURL, setImageURL] = useState("");

  function checkEmpty() {
    return (
      values.userType !== "" &&
      values.firstname !== "" &&
      values.username !== "" &&
      values.password !== "" &&
      values.passwordConfirm !== "" &&
      values.email !== "" &&
      values.phoneNumber !== "" &&
      values.displayName !== "" &&
      birthdate !== "" &&
      values.gender !== "" &&
      values.educationalLevel !== ""
    );
  }

  function checkMinLength() {
    return (
      values.userType.length >= 1 &&
      values.lastname.length >= 1 &&
      values.username.length >= 8 &&
      values.password.length >= 1 &&
      values.passwordConfirm.length >= 1 &&
      values.displayName.length >= 1
    );
  }

  function checkMaxLength() {
    return (
      values.userType.length <= 45 &&
      values.lastname.length <= 45 &&
      values.username.length <= 16 &&
      values.displayName.length <= 45
    );
  }

  function checkOtherConstraint() {
    return (
      values.password === values.passwordConfirm &&
      values.phoneNumber.length === 10 &&
      values.phoneNumber[0] === "0" &&
      (values.phoneNumber[1] === "6" ||
        values.phoneNumber[1] === "8" ||
        values.phoneNumber[1] === "9")
    );
  }

  useEffect(() => {
    // Update the document title using the browser API
    console.log("register :", registerSuccess);
  }, [registerSuccess]);

  const handleSubmit = async () => {
    console.log(values);
    console.log("-----------------start-------------");
    console.log(birthdate);
    console.log(format(birthdate, "yyyy-MM-dd"));
    console.log("------------finish-----------");
    if (!checkEmpty()) console.log("checkEmpty Error!");
    if (!checkMinLength()) console.log("checkMinLength Error!");
    if (!checkMaxLength()) console.log("checkMaxLength Error!");
    if (!checkOtherConstraint()) console.log("checkOtherConstraint Error!");

    if (
      true
      // checkEmpty() &&
      // checkMinLength() &&
      // checkMaxLength() &&
      // checkOtherConstraint()
    ) {
      const user = {
        type: values.userType,
        firstname: values.firstname,
        lastname: values.lastname,
        username: values.username,
        password: sha512_256(values.password),
        email: values.email,
        phoneNumber: values.phoneNumber,
        displayName: values.displayName,
        birthdate: format(birthdate, "yyyy-MM-dd"),
        gender: values.gender,
        educationalLevel: parseInt(values.educationalLevel),
        picture: "",
        citizenId: values.citizenId,
        citizenImage: "",
      };

      console.log(`type ${user.type}`);
      console.log(`firstname ${user.firstname}`);
      console.log(`lastname ${user.lastname}`);
      console.log(`password ${user.password}`);
      console.log(`email ${user.email}`);
      console.log(`phoneNumber is ${user.phoneNumber}`);
      console.log(`displayName${user.displayName}`);
      console.log(`birthdate ${user.birthdate}`);
      console.log(`gender ${user.gender}`);
      console.log(`educationalLevel ${user.educationalLevel}`);
      console.log(`picture ${user.picture}`);
      console.log(`citizenId ${user.citizenId}`);
      console.log(`citizenImage ${user.citizenImage}`);

      //   const user = {
      //     type: "tutor",
      //     firstname: "aongaong",
      //     lastname: "aongaong",
      //     username: "aongaong",
      //     email: "aongaong@gmail.com",
      //     phoneNumber: "0999999999",
      //     displayName: "aongaongaongaongaongaong",
      //     password: "aongaong",
      //     birthdate: "2022-02-02",
      //     gender: "male",
      //     educationalLevel: 5,
      //     picture: "",
      //     citizenId: "5404956171291",
      //     citizenImage: ""
      // }

      console.log(user);

      axios
        .post(`http://localhost:3000/register`, user, { withCredentials: true })
        .then((response) => {
          const data = response.data;
          console.log(data);
          setRegisterSuccess(true);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      console.log("Registration failed");
    }
  };

  return (
    <>
      {/* {registerSuccess && <Navigate to="/login" />} */}
      <div className="registerPage">
        <div className="registerTitle">Register</div>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "300px", minWidth: 120 },
          }}
          noValidate
          autoComplete="off"
        >
          <div className="registerForm">
            <TextField
              id="form-register-user-type"
              select
              required
              label="User Type"
              value={values.userType}
              onChange={handleChange("userType")}
            >
              {userTypeOption.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              id="form-register-firstname"
              required
              label="Firstname"
              value={values.firstname}
              inputProps={{ maxLength: 45 }}
              onChange={handleChange("firstname")}
            />

            <TextField
              id="form-register-lastname"
              required
              label="Lastname"
              value={values.lastname}
              inputProps={{ maxLength: 45 }}
              onChange={handleChange("lastname")}
            />

            <TextField
              id="form-register-username"
              required
              label="Username"
              value={values.username}
              inputProps={{ minLength: 8, maxLength: 16 }}
              onChange={handleChange("username")}
            />

            <TextField
              id="form-register-password"
              required
              label="Password"
              value={values.password}
              onChange={handleChange("password")}
            />

            <TextField
              id="form-register-confirm-password"
              required
              label="Confirm Password"
              value={values.passwordConfirm}
              onChange={handleChange("passwordConfirm")}
            />

            <TextField
              id="form-register-email"
              required
              label="Email"
              value={values.email}
              onChange={handleChange("email")}
            />

            <TextField
              id="form-register-phone-number"
              required
              label="Phone Number"
              value={values.phoneNumber}
              // onInput={(e) => {
              //   e.target.value = e.target.value
              //     ? Math.max(0, parseInt(e.target.value))
              //         .toString()
              //         .slice(0, 10)
              //     : "";
              // }}
              onChange={handleChange("phoneNumber")}
            />
            <TextField
              id="form-register-display-name"
              required
              label="Display Name"
              value={values.displayName}
              inputProps={{ minLength: 5, maxLength: 45 }}
              onChange={handleChange("displayName")}
            />

            <LocalizationProvider dateAdapter={DateAdapter}>
              <DatePicker
                required
                label="Birthdate"
                inputFormat="MM/dd/yyyy"
                value={birthdate}
                onChange={(newValue) => {
                  setBirthdate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>

            <TextField
              id="form-register-gender"
              select
              required
              value={values.gender}
              label="Gender"
              onChange={handleChange("gender")}
            >
              {genderOption.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              id="form-register-education"
              select
              required
              value={values.educationalLevel}
              label="Education Level"
              onChange={handleChange("educationalLevel")}
            >
              {educationOption.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <InputLabel>Profile Picture</InputLabel>

            <input
              className="registerPicture"
              type="file"
              value={values.profileImage || ""}
              onChange={onProfileImageChange}
            />

            <img className="profileImage" src={profileImage} alt="" />

            <TextField
              required
              id="form-register-citizen-id"
              label="Citizen ID"
              value={values.citizenId}
              onChange={handleChange("citizenId")}
              onInput={(e) => {
                e.target.value = e.target.value
                  ? Math.max(0, parseInt(e.target.value))
                      .toString()
                      .slice(0, 13)
                  : "";
              }}
            />

            <InputLabel>Citizen Image</InputLabel>

            <input
              className="registerPicture"
              type="file"
              value={citizenImage}
              onChange={onCitizenImageChange}
            />

            <img className="citizenImage" src={citizenImage} alt="" />
          </div>

          <button className="registerSubmit" onClick={handleSubmit}>
            Register
          </button>
        </Box>

        <div className="Login">
          <p className="LoginText">
            Already a user?
            <a className="LoginLink" href="/login">
              Login
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

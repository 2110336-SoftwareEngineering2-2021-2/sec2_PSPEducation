import React, { useState, useEffect } from "react";
import "./registerCard.css";
import { Box, InputLabel, TextField, MenuItem } from "@mui/material";
import DateAdapter from "@mui/lab/AdapterDateFns";
import { LocalizationProvider, DatePicker } from "@mui/lab";
import axios from "axios";
import sha512_256 from "js-sha512";
import { Navigate } from "react-router-dom";
import { format } from "date-fns";
import { FormHelperText } from "@mui/material";

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

  const [errorDetails, setErrorDetails] = useState({
    userType: { errorText: "", error: false },
    firstname: { errorText: "", error: false },
    lastname: { errorText: "", error: false },
    username: { errorText: "", error: false },
    email: { errorText: "", error: false },
    phoneNumber: { errorText: "", error: false },
    displayName: { errorText: "", error: false },
    password: { errorText: "", error: false },
    passwordConfirm: { errorText: "", error: false },
    gender: { errorText: "", error: false },
    educationalLevel: { errorText: "", error: false },
    citizenId: { errorText: "", error: false },
  });

  const [firstNameError, setFirstNameError] = useState(false);

  const [birthdate, setBirthdate] = useState(new Date());

  const [isOnceSubmit, setOnceSummit] = useState(false);

  const [isError, setIsError] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState(false);

  useEffect(() => {
    let newErrorDetails = {
      userType: { errorText: "", error: false },
      firstname: { errorText: "", error: false },
      lastname: { errorText: "", error: false },
      username: { errorText: "", error: false },
      email: { errorText: "", error: false },
      phoneNumber: { errorText: "", error: false },
      displayName: { errorText: "", error: false },
      password: { errorText: "", error: false },
      passwordConfirm: { errorText: "", error: false },
      gender: { errorText: "", error: false },
      educationalLevel: { errorText: "", error: false },
      citizenId: { errorText: "", error: false },
    };
    // USERTYPE
    if (!!!values.userType) {
      newErrorDetails.userType = {
        errorText: "Please choose your user type",
        error: true,
      };
    }

    // FIRSTNAME
    if (values.firstname.length === 0) {
      newErrorDetails.firstname = {
        errorText: "Please fill your firstname",
        error: true,
      };
    } else if (values.firstname.length > 45) {
      newErrorDetails.firstname = {
        errorText: "Firstname length must between 1-45 characters",
        error: true,
      };
    }

    // LASTNAME
    if (values.lastname.length === 0) {
      newErrorDetails.lastname = {
        errorText: "Please fill your lastname",
        error: true,
      };
    } else if (values.lastname.length > 45) {
      newErrorDetails.lastname = {
        errorText: "Lastname length must between 1-45 characters",
        error: true,
      };
    }

    // USERNAME
    if (values.username.length === 0) {
      newErrorDetails.username = {
        errorText: "Please fill your username",
        error: true,
      };
    } else if (values.username.length < 8 || values.username.length > 16) {
      newErrorDetails.username = {
        errorText: "Username length must between 8-16 characters",
        error: true,
      };
    }

    // PASSWORD
    if (values.password.length === 0) {
      newErrorDetails.password = {
        errorText: "Please fill your password",
        error: true,
      };
    } else if (!!values.password && values.password.length < 8) {
      newErrorDetails.password = {
        errorText: "Your password need at least 8 characters",
        error: true,
      };
    }

    // CONFIRM PASSWORD
    if (values.password !== values.passwordConfirm) {
      newErrorDetails.passwordConfirm = {
        errorText: "Your password doesn't match",
        error: true,
      };
    }

    // EMAIL
    if (values.email.length === 0) {
      newErrorDetails.email = {
        errorText: "Please fill your email",
        error: true,
      };
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
    ) {
      newErrorDetails.email = { errorText: "Invalid email", error: true };
    }

    // Phone Number
    if (values.phoneNumber.length === 0) {
      newErrorDetails.phoneNumber = {
        errorText: "Please fill your phone number",
        error: true,
      };
    } else if (values.phoneNumber.length !== 10) {
      newErrorDetails.phoneNumber = {
        errorText: "Invalid phone number",
        error: true,
      };
    } else if (
      !values.phoneNumber.startsWith("08") &&
      !values.phoneNumber.startsWith("09") &&
      !values.phoneNumber.startsWith("06")
    ) {
      newErrorDetails.phoneNumber = {
        errorText: "Invalid phone number",
        error: true,
      };
    }

    // Display Name
    if (values.displayName.length === 0) {
      newErrorDetails.displayName = {
        errorText: "Please fill your display name",
        error: true,
      };
    } else if (values.displayName.length > 45) {
      newErrorDetails.displayName = {
        errorText: "Display name length must between 1-45 characters",
        error: true,
      };
    }

    // Gender
    if (!!!values.gender) {
      newErrorDetails.gender = {
        errorText: "Please choose your gender",
        error: true,
      };
    }

    // Educational level
    if (!!!values.educationalLevel) {
      newErrorDetails.educationalLevel = {
        errorText: "Please fill your educational level",
        error: true,
      };
    }
    // Citizen ID
    if (values.citizenId.length === 0) {
      newErrorDetails.citizenId = {
        errorText: "Please fill your citizenId",
        error: true,
      };
    }
    if (!/^[0-9]{13}$/g.test(values.citizenId)) {
      newErrorDetails.citizenId = {
        errorText: "Invalid Citizen ID",
        error: true,
      };
    }
    let i;
    let sum = 0;
    for (i = 0, sum = 0; i < 12; i++) {
      sum += Number.parseInt(values.citizenId.charAt(i)) * (13 - i);
    }
    const checkSum = (11 - (sum % 11)) % 10;
    if (checkSum !== Number.parseInt(values.citizenId.charAt(12))) {
      newErrorDetails.citizenId = {
        errorText: "Invalid Citizen ID",
        error: true,
      };
    }

    setErrorDetails(newErrorDetails);
  }, [values]);

  const handleChange = (prop) => (event) => {
    let valueUpdated = event.target.value;
    setValues({
      ...values,
      [prop]: valueUpdated,
    });
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

  useEffect(() => {
    // Update the document title using the browser API
    console.log("register :", registerSuccess);
  }, [registerSuccess]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(values);
    console.log(errorDetails);
    console.log(birthdate);
    console.log(format(birthdate, "yyyy-MM-dd"));

    setOnceSummit(true);

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

    console.log(user);

    let isInputValid = true;
    for (const field in errorDetails) {
      if (errorDetails[field].error) {
        isInputValid = false;
      }
    }

    if (isInputValid) {
      axios
        .post(`http://localhost:3000/register`, user, { withCredentials: true })
        .then((response) => {
          const data = response.data;
          console.log(data);
          setRegisterSuccess(true);
          alert("Registration Completed!");
        })
        .catch((e) => {
          alert(`Register Failed ${e}`);
          console.log(e);
        });
    }
  };

  return (
    <>
      {registerSuccess && <Navigate to="/login" />}

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
              error={isOnceSubmit && errorDetails.userType.error}
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

            {isOnceSubmit && errorDetails.userType.error && (
              <div className="errorText">{errorDetails.userType.errorText}</div>
            )}

            <TextField
              id="form-register-firstname"
              required
              error={isOnceSubmit && errorDetails.firstname.error}
              label="Firstname"
              value={values.firstname}
              inputProps={{ maxLength: 45 }}
              onChange={handleChange("firstname")}
              placeholder="1-45 characters"
            />
            {isOnceSubmit && errorDetails.firstname.error && (
              <div className="errorText">
                {errorDetails.firstname.errorText}
              </div>
            )}

            <TextField
              id="form-register-lastname"
              required
              error={isOnceSubmit && errorDetails.lastname.error}
              label="Lastname"
              value={values.lastname}
              inputProps={{ maxLength: 45 }}
              onChange={handleChange("lastname")}
              placeholder="1-45 characters"
            />
            {isOnceSubmit && errorDetails.lastname.error && (
              <div className="errorText">{errorDetails.lastname.errorText}</div>
            )}

            <TextField
              id="form-register-username"
              required
              error={isOnceSubmit && errorDetails.username.error}
              label="Username"
              value={values.username}
              inputProps={{ minLength: 8, maxLength: 16 }}
              onChange={handleChange("username")}
              placeholder="8-16 characters"
            />
            {isOnceSubmit && errorDetails.username.error && (
              <div className="errorText">{errorDetails.username.errorText}</div>
            )}

            <TextField
              id="form-register-password"
              required
              error={isOnceSubmit && errorDetails.password.error}
              type="password"
              label="Password"
              value={values.password}
              onChange={handleChange("password")}
              placeholder="At least 8 characters"
            />
            {isOnceSubmit && errorDetails.password.error && (
              <div className="errorText">{errorDetails.password.errorText}</div>
            )}

            <TextField
              id="form-register-confirm-password"
              required
              error={errorDetails.passwordConfirm.error}
              type="password"
              label="Confirm Password"
              value={values.passwordConfirm}
              onChange={handleChange("passwordConfirm")}
            />
            {errorDetails.passwordConfirm.error && (
              <div className="errorText">
                {errorDetails.passwordConfirm.errorText}
              </div>
            )}

            <TextField
              id="form-register-email"
              required
              error={isOnceSubmit && errorDetails.email.error}
              label="Email"
              value={values.email}
              onChange={handleChange("email")}
            />
            {isOnceSubmit && errorDetails.email.error && (
              <div className="errorText">{errorDetails.email.errorText}</div>
            )}

            <TextField
              id="form-register-phone-number"
              required
              error={isOnceSubmit && errorDetails.phoneNumber.error}
              label="Phone Number"
              value={values.phoneNumber}
              inputProps={{ maxLength: 10 }}
              onChange={handleChange("phoneNumber")}
              placeholder="10 digits"
              onInput={(e) => {
                var tmpPhoneNum = Math.max(0, parseInt(e.target.value))
                  .toString()
                  .slice(0, 10);
                e.target.value = isNaN(tmpPhoneNum)
                  ? ""
                  : tmpPhoneNum === "0"
                  ? "0"
                  : "0" + tmpPhoneNum;
              }}
            />
            {isOnceSubmit && errorDetails.phoneNumber.error && (
              <div className="errorText">
                {errorDetails.phoneNumber.errorText}
              </div>
            )}

            <TextField
              id="form-register-display-name"
              required
              error={isOnceSubmit && errorDetails.displayName.error}
              label="Display Name"
              value={values.displayName}
              inputProps={{ minLength: 5, maxLength: 45 }}
              onChange={handleChange("displayName")}
              placeholder="1-45 characters"
            />
            {isOnceSubmit && errorDetails.displayName.error && (
              <div className="errorText">
                {errorDetails.displayName.errorText}
              </div>
            )}

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
            {isOnceSubmit && !!!birthdate && (
              <div className="errorText">Please fill your birthdate.</div>
            )}

            <TextField
              id="form-register-gender"
              select
              required
              error={isOnceSubmit && errorDetails.gender.error}
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
            {isOnceSubmit && errorDetails.gender.error && (
              <div className="errorText">{errorDetails.gender.errorText}</div>
            )}

            <TextField
              id="form-register-education"
              select
              required
              error={isOnceSubmit && errorDetails.educationalLevel.error}
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
            {isOnceSubmit && errorDetails.educationalLevel.error && (
              <div className="errorText">
                {errorDetails.educationalLevel.errorText}
              </div>
            )}

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
              error={isOnceSubmit && errorDetails.citizenId.error}
              onChange={handleChange("citizenId")}
              onInput={(e) => {
                e.target.value = isNaN(parseInt(e.target.value))
                  ? ""
                  : Math.max(0, parseInt(e.target.value))
                      .toString()
                      .slice(0, 13);
              }}
            />
            {isOnceSubmit && errorDetails.citizenId.error && (
              <div className="errorText">
                {errorDetails.citizenId.errorText}
              </div>
            )}

            <InputLabel>Citizen Image</InputLabel>

            <input
              className="registerPicture"
              type="file"
              value={citizenImage}
              onChange={onCitizenImageChange}
            />

            <img className="citizenImage" src={citizenImage} alt="" />
          </div>

          <button
            type="submit"
            className="registerSubmit"
            onClick={handleSubmit}
          >
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

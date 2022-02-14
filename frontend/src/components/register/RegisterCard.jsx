import React, { useState } from "react";
import { NumberFormatCustom } from "../simple/NumberFormatCustom";
import "./registerCard.css";
import {
  Box,
  InputLabel,
  TextField,
  MenuItem,
  Select,
  FormControl,
} from "@mui/material";
// import FileUploader from "./FileUploader.jsx";
import DateAdapter from "@mui/lab/AdapterDateFns";
import { LocalizationProvider, DesktopDatePicker } from "@mui/lab";

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
  const [selectedOption, setSelectedOption] = useState({
    userType: "",
    gender: "",
    educationLevel: "",
  });

  const [values, setValues] = useState({
    birthdate: new Date(),
  });

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div className="registerPage">
      <div className="registerTitle">Register</div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "300px", minWidth: 120 },
        }}
        noValidate
        autoComplete="off"
        spellCheck="false"
      >
        <div className="registerForm">
          <TextField
            id="userType-simple-select"
            select
            required
            label="User Type"
            value={selectedOption.userType}
            onChange={handleChange}
            helperText=""
          >
            {userTypeOption.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField id="form-register-firstname" required label="Firstname" />

          <TextField id="form-register-lastname" required label="Lastname" />

          <TextField id="form-register-username" required label="Username" />

          <TextField id="form-register-password" required label="Password" />

          <TextField
            id="form-register-confirm-password"
            required
            label="Confirm Password"
          />

          <TextField id="form-register-email" required label="Email" />

          <TextField
            id="form-register-phone-number"
            required
            label="Phone Number"
          />

          <TextField
            id="form-register-display-name"
            required
            label="Display Name"
          />

          <LocalizationProvider dateAdapter={DateAdapter}>
            <DesktopDatePicker
              required
              label="Birthdate"
              inputFormat="MM/dd/yyyy"
              value={values.birthdate}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>

          <TextField
            id="form-register-gender"
            select
            required
            value={selectedOption.gender}
            label="Gender"
            onChange={handleChange}
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
            value={selectedOption.educationLevel}
            label="Education Level"
            onChange={handleChange}
          >
            {educationOption.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <InputLabel>Profile Picture</InputLabel>
          {/* <input
          className="registerPicture"
          type="text"
          autocomplete="off"
          spellcheck="false"
          // placeholder="Picture"
          aria-invalid="false"
        /> */}

          <input
            className="registerPicture"
            type="file"
            value={selectedFile}
            onChange={(e) => setSelectedFile(e.target.files[0])}
          />

          {/* <FileUploaded
          onFileSelectSuccess={(file) => setSelectedFile(file)}
          onFileSelectError={({ error }) => alert(error)}
        /> */}

          <TextField
            id="form-register-citizen-id"
            required
            label="Citizen ID"
            InputProps={{
              inputComponent: NumberFormatCustom,
            }}
          />

          <InputLabel>Citizen Image</InputLabel>

          <TextField
            className="registerCitizenImage"
            type="text"
            autocomplete="off"
            spellcheck="false"
            // placeholder="Citizen Image"
            aria-invalid="false"
          />
        </div>

        <button className="registerSubmit">Register</button>
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
  );
}

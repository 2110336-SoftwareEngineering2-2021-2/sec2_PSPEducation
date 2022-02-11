import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import FileUploader from "./FileUploader.jsx";
import "./RegisterCard.css";

export default function RegisterCard() {
  const [userType, setUserType] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [educationLevel, setEducationLevel] = React.useState("");
  const handleTypeChange = (event) => {
    setUserType(event.target.value);
  };
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  const handleEducationLevelChange = (event) => {
    setEducationLevel(event.target.value);
  };

  const [selectedFile, setSelectedFile] = React.useState(null);

  return (
    <div className="registerPage">
      <div className="registerTitle">Register</div>
      <div className="registerForm">
        {/* <input
          className="registerType"
          type="text"
          autocomplete="off"
          spellcheck="false"
          placeholder="Type"
          aria-invalid="false"
        /> */}
        {/* <select
          className="registerType"
          autocomplete="off"
          spellcheck="false"
          placeholder="Type"
          aria-invalid="false"
          required="true"
          className="registerType"
          value={userType}
          // placeholder="User Type"
          onChange={handleTypeChange}
        >
          <option>Select gender</option>
          <option value="tutor">Tutor</option>
          <option value="student">Student</option>
        </select> */}
        <Box sx={{ minWidth: 120 }}>
          <InputLabel id="userType-simple-select">User Type</InputLabel>
          <Select
            labelId="userType-simple-select-label"
            id="userType-simple-select"
            className="registerType"
            value={userType}
            // placeholder="User Type"
            onChange={handleTypeChange}
          >
            <MenuItem value="tutor">Tutor</MenuItem>
            <MenuItem value="student">Student</MenuItem>
          </Select>
        </Box>
        <InputLabel>Firstname</InputLabel>
        <input
          className="registerFirstname"
          type="text"
          autocomplete="off"
          spellcheck="false"
          // placeholder="Firstname"
          aria-invalid="false"
        />
        <InputLabel>Lastname</InputLabel>
        <input
          className="registerLastname"
          type="text"
          autocomplete="off"
          spellcheck="false"
          // placeholder="Lastname"
          aria-invalid="false"
        />
        <InputLabel>Username</InputLabel>
        <input
          className="registerUsername"
          type="text"
          autocomplete="off"
          spellcheck="false"
          // placeholder="Username"
          aria-invalid="false"
        />
        <InputLabel>Password</InputLabel>
        <input
          className="registerPassword"
          type="password"
          autocomplete="off"
          spellcheck="false"
          // placeholder="Password"
          aria-invalid="false"
        />
        <InputLabel>Confirm Password</InputLabel>
        <input
          className="registerConfirmPassword"
          type="password"
          autocomplete="off"
          spellcheck="false"
          // placeholder="Confirm Password"
          aria-invalid="false"
        />
        <InputLabel>Email</InputLabel>
        <input
          className="registerEmail"
          type="text"
          autocomplete="off"
          spellcheck="false"
          // placeholder="Email"
          aria-invalid="false"
        />
        <InputLabel>Phone Number</InputLabel>
        <input
          className="registerPhoneNumber"
          type="text"
          autocomplete="off"
          spellcheck="false"
          // placeholder="Phone Number"
          aria-invalid="false"
        />
        <InputLabel>Display Name</InputLabel>
        <input
          className="registerDisplayNumber"
          type="text"
          autocomplete="off"
          spellcheck="false"
          // placeholder="Display Number"
          aria-invalid="false"
        />
        <InputLabel>Birthdate</InputLabel>
        <input
          className="registerBirthdate"
          type="date"
          autocomplete="off"
          spellcheck="false"
          // placeholder="Birthdate"
          aria-invalid="false"
        />
        <Box sx={{ minWidth: 120 }}>
          <InputLabel id="gender-simple-select">Gender</InputLabel>
          <Select
            labelId="gender-simple-select-label"
            id="gender-simple-select"
            className="registerGender"
            value={gender}
            // placeholder="Gender"
            onChange={handleGenderChange}
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
        </Box>
        <Box sx={{ minWidth: 120 }}>
          <InputLabel id="education-level-simple-select">
            Education Level
          </InputLabel>
          <Select
            labelId="education-level-simple-select-label"
            id="education-level-simple-select"
            className="registerEducationLevel"
            value={educationLevel}
            // placeholder="Education Level"
            onChange={handleEducationLevelChange}
          >
            <MenuItem value={0}>Not Defined</MenuItem>
            <MenuItem value={1}>Pre-school</MenuItem>
            <MenuItem value={2}>Primary1-3</MenuItem>
            <MenuItem value={3}>Primary4-6</MenuItem>
            <MenuItem value={4}>Secondary1-3</MenuItem>
            <MenuItem value={5}>Secondary4-6</MenuItem>
            <MenuItem value={6}>Bachelor's Degree</MenuItem>
            <MenuItem value={7}>Master's Degree</MenuItem>
            <MenuItem value={8}>PHD</MenuItem>
          </Select>
        </Box>
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
        <InputLabel>Citizen ID</InputLabel>
        <input
          className="registerCitizenId"
          type="text"
          autocomplete="off"
          spellcheck="false"
          // placeholder="Citizen ID"
          aria-invalid="false"
        />
        <InputLabel>Citizen Image</InputLabel>
        <input
          className="registerCitizenImage"
          type="text"
          autocomplete="off"
          spellcheck="false"
          // placeholder="Citizen Image"
          aria-invalid="false"
        />
        <button className="registerSubmit">Register</button>
      </div>

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

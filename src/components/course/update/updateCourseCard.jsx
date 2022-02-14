import React from "react";
import "./updateCourseCard.css";
import Dropdown from "react-dropdown";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

export default function UpdateCourseCard(props) {
  const [selectedLt, setSelectedLt] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);

  const handleChangeLearningType = (event) => {
    setSelectedLt(event.target.value);
  };
  const handleChangeStatus = (event) => {
    setSelectedStatus(event.target.value);
  };

  return (
    <div className="updateCourse">
      <div className="updateCourseTitle">Update Course</div>
      <div className="updateCourseForm">
        <input
          className="updateCourseFormCourseName"
          type="text"
          autocomplete="off"
          spellcheck="false"
          placeholder="Course name"
          aria-invalid="false"
        />
        <input
          className="updateCourseFormSubject"
          type="text"
          autocomplete="off"
          spellcheck="false"
          placeholder="Subject"
          aria-invalid="false"
        />
        <input
          className="updateCourseFormLesson"
          type="text"
          autocomplete="off"
          spellcheck="false"
          placeholder="lesson"
          aria-invalid="false"
        />
        <input
          className="updateCourseFormPrice"
          type="number"
          step="50"
          min="0"
          max="5000"
          placeholder="Price"
        />
        <input
          className="updateCourseFormCapacity"
          type="number"
          step="50"
          min="0"
          max="5000"
          placeholder="Capacity"
        />
        <input
          className="updateCourseFormHour"
          type="number"
          step="50"
          min="0"
          max="5000"
          placeholder="Hour"
        />
        <Box sx={{ minWidth: 120 }}>
          <InputLabel id="Description">Description</InputLabel>
          <textarea
            className="updateCourseFormDescription"
            id="Description"
            label="Description"
            rows="10"
            cols="50"
          />
          <InputLabel id="Start date">Start date</InputLabel>
          <input
            className="updateCourseFormStartDate"
            id="Start date"
            type="date"
          />
          <InputLabel id="Finish date">Finish date</InputLabel>
          <input
            className="updateCourseFormFinishDate"
            id="Finish date"
            type="date"
          />
          <InputLabel id="Start time">Start time</InputLabel>
          <input
            className="updateCourseFormTimeslot"
            type="time"
            id="Start time"
            name="Start time"
          />
          <InputLabel id="End time">End time</InputLabel>
          <input
            className="updateCourseFormTimeslot"
            type="time"
            id="End time"
            name="End time"
          />
          <div>
            <input type="checkbox" id="Monday" name="<Monday" value="Mon" />
            <label for="Monday"> Monday </label>
            <input type="checkbox" id="Tuesday" name="<Tuesday" value="Tue" />
            <label for="Tuesday"> Tuesday </label>
            <input
              type="checkbox"
              id="Wednesday"
              name="<Wednesday"
              value="Wed"
            />
            <label for="Wednesday"> Wednesday </label>
            <input type="checkbox" id="Thursday" name="<Thursday" value="Thu" />
            <label for="Thursday"> Thursday </label>
            <br />
            <input type="checkbox" id="Friday" name="<Friday" value="Fri" />
            <label for="Friday"> Friday </label>
            <input type="checkbox" id="Saturday" name="<Saturday" value="Sat" />
            <label for="Saturday"> Saturday </label>
            <input type="checkbox" id="Sunday" name="<Sunday" value="Sun" />
            <label for="Sunday"> Sunday </label>
          </div>
        </Box>
        <input
          className="updateCourseFormLocation"
          type="text"
          autocomplete="off"
          spellcheck="false"
          placeholder="Location"
          aria-invalid="false"
        />

        <Box sx={{ minWidth: 120 }}>
          <InputLabel id="learningType-select-label">Learning type</InputLabel>
          <Select
            labelId="learningType-simple-select-label"
            id="learningType-select-label"
            className="createCourseFormlearningType"
            value={selectedLt}
            placeholder="Learning type"
            onChange={handleChangeLearningType}
          >
            <MenuItem value="onsite">Onsite</MenuItem>
            <MenuItem value="online">Online</MenuItem>
            <MenuItem value="mixed">Mixed</MenuItem>
          </Select>
          <InputLabel id="status-select-label">Status</InputLabel>
          <Select
            labelId="status-simple-select-label"
            id="status-select-label"
            className="createCourseFormlearningType"
            value={selectedStatus}
            placeholder="Status"
            onChange={handleChangeStatus}
          >
            <MenuItem value="unpublished">unpublished</MenuItem>
            <MenuItem value="publish">publish</MenuItem>
          </Select>
        </Box>
        <button className="updateCourseFormSubmit">update</button>
      </div>
    </div>
  );
}

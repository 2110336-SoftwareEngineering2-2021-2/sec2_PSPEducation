import React, { useState, useEffect } from "react";
import "./updateCourseCard.css";
import Dropdown from "react-dropdown";
import { FormControl, Select, Box, InputLabel, MenuItem } from "@mui/material";
import axios from "axios";

export default function UpdateCourseCard(props) {
  // console.log(props)
  // const [selectedLt, setSelectedLt] = useState(null);
  // const [selectedStatus, setSelectedStatus] = useState(null);
  const [dataCourse, setDataCourse] = useState({
    tutorId: props.data.tutorId,
    courseName: props.data.courseName,
    subject: props.data.subject,
    lesson: props.data.lesson,
    price: props.data.price,
    courseStartDate: props.data.courseStartDate,
    courseFinishDate: props.data.courseFinishDate,
    timeSlots: props.data.timeSlots,
    capacity: props.data.capacity,
    status: props.data.status,
    learningType: props.data.learningType,
    description: props.data.description,
    hour: props.data.hour,
    location: props.data.location,
  });

  const [updateSuccess, setUpdateSuccess] = useState(false);

  useEffect(() => {
    // Update the document title using the browser API
    console.log(updateSuccess);
  }, [updateSuccess]);

  const handleUpdate = (event) => {
    console.log(dataCourse);
    axios.patch(`http://localhost:3000/course/update/${props.id}`, dataCourse, {
      withCredentials: true,
    });
    setUpdateSuccess(true);
  };

  const handleChange = (prop) => (event) => {
    setDataCourse({
      ...dataCourse,
      [prop]: event.target.value,
    });
    console.log(dataCourse);
  };

  return (
    <div className="updateCourse">
      <div className="updateCourseTitle">Update Course</div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "500px" },
        }}
        noValidate
        autoComplete="off"
        spellCheck="false"
      >
        <div className="updateCourseForm">
          <input
            className="updateCourseFormCourseName"
            type="text"
            label="Course name"
            value={dataCourse.courseName}
            onChange={handleChange("courseName")}
          />
          <input
            className="updateCourseFormSubject"
            type="text"
            label="Subject"
            value={dataCourse.subject}
            onChange={handleChange("subject")}
          />
          <input
            className="updateCourseFormLesson"
            type="text"
            label="lesson"
            value={dataCourse.lesson}
            onChange={handleChange("courseName")}
          />
          <input
            className="updateCourseFormPrice"
            type="number"
            step="50"
            min="0"
            max="5000"
            label="Price"
            value={dataCourse.price}
            onChange={handleChange("courseName")}
          />
          <input
            className="updateCourseFormCapacity"
            type="number"
            step="50"
            min="0"
            max="5000"
            label="Capacity"
            value={dataCourse.capacity}
            onChange={handleChange("courseName")}
          />
          <input
            className="updateCourseFormHour"
            type="number"
            step="50"
            min="0"
            max="5000"
            label="Hour"
            value={dataCourse.hour}
            onChange={handleChange("hour")}
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
              <input
                type="checkbox"
                id="Thursday"
                name="<Thursday"
                value="Thu"
              />
              <label for="Thursday"> Thursday </label>
              <br />
              <input type="checkbox" id="Friday" name="<Friday" value="Fri" />
              <label for="Friday"> Friday </label>
              <input
                type="checkbox"
                id="Saturday"
                name="<Saturday"
                value="Sat"
              />
              <label for="Saturday"> Saturday </label>
              <input type="checkbox" id="Sunday" name="<Sunday" value="Sun" />
              <label for="Sunday"> Sunday </label>
            </div>
          </Box>
          <input
            className="updateCourseFormLocation"
            type="text"
            label="Location"
          />

          <Box sx={{ minWidth: 120 }}>
            <InputLabel id="learningType-select-label">
              Learning type
            </InputLabel>
            <Select
              labelId="learningType-simple-select-label"
              id="learningType-select-label"
              className="createCourseFormlearningType"
              // value={selectedLt}
              label="Learning type"
              // onChange={}
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
              // value={selectedStatus}
              label="Status"
              // onChange={handleChangeStatus}
            >
              <MenuItem value="unpublished">unpublished</MenuItem>
              <MenuItem value="publish">publish</MenuItem>
            </Select>
          </Box>
          <button className="updateCourseFormSubmit" onClick={handleUpdate}>
            update
          </button>
        </div>
      </Box>
    </div>
  );
}

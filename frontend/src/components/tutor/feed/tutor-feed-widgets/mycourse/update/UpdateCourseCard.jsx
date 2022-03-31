import React, { useState, useEffect } from "react";
import "./updateCourseCard.css";
import { FormControl, Box, TextField, MenuItem } from "@mui/material";
import DateAdapter from "@mui/lab/AdapterDateFns";
import { LocalizationProvider, DesktopDatePicker } from "@mui/lab";
import axios from "axios";
import { format } from "date-fns";

var APIHandler = require("../../../../../simple/api/APIHandler");

const learningTypeOption = [
  {
    value: "onsite",
    label: "Onsite",
  },
  {
    value: "online",
    label: "Online",
  },
  {
    value: "mixed",
    label: "Mixed",
  },
];

export default function UpdateCourseCard({
  courseId,
  data,
  setTrigger,
  setData,
}) {
  const [values, setValues] = useState({});

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [updateSuccess, setUpdateSuccess] = useState(false);

  useEffect(() => {
    setValues(data);
    setStartDate(data.courseStartDate);
    setEndDate(data.courseFinishDate);
    console.log(data);
  }, [data]);

  useEffect(() => {
    // Update the document title using the browser API
    console.log(updateSuccess);
  }, [updateSuccess]);

  const handleUpdate = () => {
    APIHandler.handleUpdateCourse(values, courseId, setUpdateSuccess);
  };

  const handleChange = (e) => (event) => {
    setValues({
      ...values,
      [e]: event.target.value,
    });
    console.log(values);
  };

  return (
    <>
      {values && (
        <div className="updateCourse">
          <div className="updateCourseTitle">Update Course</div>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": {
                m: 1,
                width: "500px",
              },
            }}
            noValidate
            autoComplete="off"
            spellCheck="false"
          >
            <div className="updateCourseForm">
              <TextField
                required
                // className="updateCourseFormCourseName"
                id="form-course-name"
                label="Course name"
                value={values.courseName}
                onChange={handleChange("courseName")}
              />
              <TextField
                required
                // className="updateCourseFormSubject"
                id="form-subject"
                label="Subject"
                value={values.subject}
                onChange={handleChange("subject")}
              />
              <TextField
                required
                // className="updateCourseFormLesson"
                id="form-lesson"
                label="Lesson"
                value={values.lesson}
                onChange={handleChange("lesson")}
              />
              <TextField
                required
                // className="updateCourseFormPrice"
                id="form-price"
                label="Price"
                helperText="Total Price"
                value={values.price}
                onChange={handleChange("price")}
                onInput={(e) => {
                  e.target.value = e.target.value
                    ? Math.max(0, parseInt(e.target.value))
                        .toString()
                        .slice(0, 10)
                    : "";
                }}
              />
              <LocalizationProvider dateAdapter={DateAdapter}>
                <DesktopDatePicker
                  required
                  id="form-start-date"
                  label="Start Date"
                  inputFormat="MM/dd/yyyy"
                  value={startDate}
                  onChange={(newValue) => {
                    setStartDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />

                <DesktopDatePicker
                  required
                  id="form-end-date"
                  label="End Date"
                  inputFormat="MM/dd/yyyy"
                  value={endDate}
                  onChange={(newValue) => {
                    setEndDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
              <TextField
                required
                // className="updateCourseFormHour"
                id="form-hour"
                label="Hour"
                helperText="Total Hour"
                value={values.hour}
                onChange={handleChange("hour")}
                onInput={(e) => {
                  e.target.value = e.target.value
                    ? Math.max(0, parseInt(e.target.value))
                        .toString()
                        .slice(0, 9)
                    : "";
                }}
              />
              <TextField
                required
                // className="updateCourseFormCapacity"
                id="form-capacity"
                label="Capacity"
                helperText="Normal subscription max at 12, Premium subscription max at 50"
                value={values.capacity}
                onChange={handleChange("capacity")}
                onInput={(e) => {
                  e.target.value = e.target.value
                    ? Math.max(0, parseInt(e.target.value))
                        .toString()
                        .slice(0, 2)
                    : "";
                }}
              />
              <TextField
                required
                id="form-description"
                label="Description"
                multiline
                rows={4}
                value={values.description}
                onChange={handleChange("description")}
              />
              <TextField
                required
                id="form-learning-type"
                select
                label="Learning type"
                value={values.learningType}
                onChange={handleChange("learningType")}
                helperText=""
              >
                {learningTypeOption.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                required
                //className="updateCourseFormLocation"
                id="form-location"
                label="Location"
                value={values.location}
                onChange={handleChange("location")}
              />

              <button className="updateCourseFormSubmit" onClick={handleUpdate}>
                update
              </button>
            </div>
          </Box>
        </div>
      )}
    </>
  );
}

import React, { useState, useEffect } from "react";
import "./createCoursePopup.css";
import { FormControl, Box, TextField, MenuItem } from "@mui/material";
import DateAdapter from "@mui/lab/AdapterDateFns";
import { LocalizationProvider, DesktopDatePicker } from "@mui/lab";
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

export default function CreateCoursePopup({
  trigger,
  setTrigger,
  cookie,
  setCookie,
  removeCookie,
}) {
  const [values, setValues] = useState({
    courseName: "",
    subject: "",
    lesson: "",
    price: "",
    hour: "",
    capacity: "",
    description: "",
    learningType: "",
    location: "",
  });

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [createSuccess, setCreateSuccess] = useState(false);

  const handleChange = (e) => (event) => {
    setValues({
      ...values,
      [e]: event.target.value,
    });
  };

  function checkEmpty() {
    return (
      values.courseName !== "" &&
      values.subject !== "" &&
      values.price !== "" &&
      values.hour !== "" &&
      values.capacity !== "" &&
      values.learningType !== "" &&
      values.location !== ""
    );
  }

  function checkMinLength() {
    return (
      values.courseName.length >= 1 &&
      values.subject.length >= 1 &&
      values.price.length >= 1 &&
      values.hour.length >= 1 &&
      values.capacity.length >= 1 &&
      values.location.length >= 1
    );
  }

  function checkMaxLength() {
    return (
      values.courseName.length <= 45 &&
      values.subject.length <= 45 &&
      values.lesson.length <= 45 &&
      values.location.length <= 45
    );
  }

  useEffect(() => {
    // Update the document title using the browser API
    console.log(createSuccess);
  }, [createSuccess]);

  const handleSubmit = async () => {
    if (checkEmpty() && checkMinLength() && checkMaxLength()) {
      const course = {
        tutorId: cookie.user,
        courseName: values.courseName,
        subject: values.subject,
        lesson: values.lesson,
        courseStartDate: format(startDate, "yyyy-MM-dd"),
        courseFinishDate: format(endDate, "yyyy-MM-dd"),
        //dummyTimeSlot
        timeSlots: [
          {
            day: "Sun",
            timeStart: "08:00",
            timeFinish: "09:00",
          },
        ],
        price: parseInt(values.price),
        capacity: parseInt(values.capacity),
        description: values.description || "",
        hour: parseInt(values.hour),
        status: "unpublished",
        learningType: values.learningType,
        location: values.location,
      };

      console.log(course);
      APIHandler.handleCreateNewCourse(course, setCreateSuccess);
    } else {
      console.log("Wrong Inputs!");
    }
  };

  return (
    <>
      <div className="createCourse">
        <div className="createCourseTitle">Create Course</div>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "500px" },
          }}
          noValidate
          autoComplete="off"
          spellCheck="false"
        >
          <div className="createCourseForm">
            <TextField
              required
              id="form-course-name"
              label="Course name"
              value={values.courseName}
              onChange={handleChange("courseName")}
            />

            <TextField
              required
              id="form-subject"
              label="Subject"
              value={values.subject}
              onChange={handleChange("subject")}
            />

            <TextField
              id="form-lesson"
              label="Lesson"
              value={values.lesson}
              onChange={handleChange("lesson")}
            />

            <TextField
              required
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
              id="form-hour"
              label="Hour"
              helperText="Total Hour"
              value={values.hour}
              onChange={handleChange("hour")}
              onInput={(e) => {
                e.target.value = e.target.value
                  ? Math.max(0, parseInt(e.target.value)).toString().slice(0, 9)
                  : "";
              }}
            />

            <TextField
              required
              id="form-capacity"
              label="Capacity"
              helperText="Normal subscription max at 12, Premium subscription max at 50"
              value={values.capacity}
              onChange={handleChange("capacity")}
              onInput={(e) => {
                e.target.value = e.target.value
                  ? Math.max(0, parseInt(e.target.value)).toString().slice(0, 2)
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
              id="form-location"
              label="Location"
              value={values.location}
              onChange={handleChange("location")}
            />

            <div className="createCoursePopupButton">
              <button
                className="createCoursePopupButtonCreate"
                onClick={handleSubmit}
              >
                Create
              </button>
              <button
                className="createCoursePopupButtonClear"
                onClick={() => {}}
              >
                Clear
              </button>
            </div>
          </div>
        </Box>
      </div>
    </>
  );
}

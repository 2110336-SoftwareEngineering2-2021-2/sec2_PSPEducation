import React, { useState, forwardRef } from "react";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";
import "./createCoursePopup.css";
import {
  FormControl,
  Select,
  Box,
  InputLabel,
  MenuItem,
  TextField,
  Stack,
} from "@mui/material";
import DateAdapter from "@mui/lab/AdapterDateFns";
import {
  LocalizationProvider,
  DesktopDatePicker,
  MobileDatePicker,
} from "@mui/lab";

// import { makeStyles } from "@material-ui/core/styles";

const learningType = [
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

const NumberFormatCustom = forwardRef(function NumberFormatCustom(props, ref) {
  const { onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
    />
  );
});

NumberFormatCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function CreateCoursePopup(props) {
  const [selectedOption, setSelectedOption] = useState(null);

  const [values, setValues] = useState({
    price: "",
    capacity: "",
    hour: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
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
            <TextField required id="form-course-name" label="Course name" />

            <TextField required id="form-subject" label="Subject" />

            <TextField id="form-course-name" label="Lesson" />

            <TextField
              id="form-price"
              required
              label="Price"
              helperText="Total Price"
              value={values.price}
              onChange={handleChange}
              InputProps={{
                inputComponent: NumberFormatCustom,
              }}
            />
            <LocalizationProvider dateAdapter={DateAdapter}>
              <DesktopDatePicker
                label="Start Date"
                inputFormat="MM/dd/yyyy"
                value={values.startDate}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />

              <DesktopDatePicker
                label="End Date"
                inputFormat="MM/dd/yyyy"
                value={values.endDate}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>

            <TextField
              id="form-hour"
              required
              label="Hour"
              helperText="Total Hour"
              value={values.hour}
              onChange={handleChange}
              InputProps={{
                inputComponent: NumberFormatCustom,
              }}
            />

            <TextField
              id="form-capacity"
              required
              label="Capacity"
              helperText="Normal subscription max at 12, Premium subscription max at 50"
              value={values.capacity}
              onChange={handleChange}
              InputProps={{
                inputComponent: NumberFormatCustom,
              }}
            />

            <TextField
              id="form-description"
              label="Description"
              multiline
              rows={4}
            />

            <TextField
              id="form-learning-type"
              select
              required
              label="Learning type"
              value={selectedOption}
              onChange={handleChange}
              helperText=""
            >
              {learningType.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField id="form-location" label="Location" />

            {/* <input
            className="createCourseFormStatus"
            disabled="true"
            type="text"
            autocomplete="off"
            spellcheck="false"
            placeholder="unpublished"
            aria-invalid="false"
          /> */}

            <div className="createCoursePopupButton">
              <button
                className="createCoursePopupButtonCreate"
                onClick={() => {}}
              >
                create
              </button>
              <button
                className="createCoursePopupButtonClear"
                onClick={() => {}}
              >
                clear
              </button>
            </div>
          </div>
        </Box>
      </div>
    </>
  );
}

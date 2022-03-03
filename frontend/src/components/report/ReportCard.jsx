import React, { useState, useEffect } from "react";
import "./ReportCard.css";
import { Box, InputLabel, TextField, MenuItem } from "@mui/material";

const APIHandler = require("../simple/api/APIHandler");

const problemTypeOption = [
  {
    value: 0,
    label: "general report",
  },
  {
    value: 1,
    label: "payment report",
  },
  {
    value: 2,
    label: "course report",
  },
];

export default function ReportCard({ cookie, setCookie, removeCookie }) {
  const [values, setValues] = useState({
    title: "",
    type: "",
    detail: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({
      ...values,
      [prop]: event.target.value,
    });
  };

  const [picture, setPicture] = useState([]);

  const onPictureChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setPicture([URL.createObjectURL(event.target.files[0])]);
    }
  };

  return (
    <>
      <div className="reportPage">
        <div className="reportTitle">Report</div>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "500px", minWidth: 120 },
          }}
          noValidate
          autoComplete="off"
        >
          <div className="reportForm">
            <TextField
              id="form-report-title"
              required
              label="Title"
              value={values.title}
              inputProps={{ maxLength: 45 }}
              onChange={handleChange("title")}
            />
            <TextField
              id="form-report-problem-type"
              select
              required
              value={values.type}
              label="Problem Type"
              onChange={handleChange("type")}
            >
              {problemTypeOption.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="form-report-detail"
              fullWidth
              multiline
              rows={10}
              required
              label="Detail"
              value={values.detail}
              onChange={handleChange("detail")}
            />
            <InputLabel>Attached Picture</InputLabel>
            <input
              className="reportPicture"
              type="file"
              value={picture || []}
              onChange={onPictureChange}
            />

            <img className="profileImage" src={picture} alt="" />
          </div>

          <div className="reportSubmit">
            <button
              className=""
              onClick={() =>
                APIHandler.handleSubmitReport(
                  cookie.user,
                  values.title,
                  values.type,
                  values.detail,
                  picture
                )
              }
            >
              Report Problem
            </button>
          </div>
        </Box>
      </div>
    </>
  );
}

import React from "react";
import "./mainCard.css";
import { useState } from "react";
import { FormControl, Select, Box, InputLabel, MenuItem } from "@mui/material";
// import { makeStyles } from "@material-ui/core/styles";

export default function MainCard() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="main">
      <div className="mainTitle">Create Course</div>

      <div className="mainForm">
        <input
          className="mainFormCourseName"
          type="text"
          autocomplete="off"
          spellcheck="false"
          placeholder="Course name"
          aria-invalid="false"
        />

        <input
          className="mainFormSubject"
          type="text"
          autocomplete="off"
          spellcheck="false"
          placeholder="Subject"
          aria-invalid="false"
        />

        <input
          className="mainFormLesson"
          type="text"
          autocomplete="off"
          spellcheck="false"
          placeholder="lesson"
          aria-invalid="false"
        />

        <label for="start">Start date:</label>

        <input className="mainFormStartDate" id="start" type="date" />

        <label for="finish">Finish date:</label>

        <input className="mainFormFinishDate" id="finish" type="date" />

        <input
          className="mainFormPrice"
          type="number"
          step="50"
          min="0"
          max="5000"
          placeholder="Price"
        />

        <input
          className="mainFormCapacity"
          type="number"
          step="50"
          min="0"
          max="5000"
          placeholder="Capacity"
        />

        <input
          className="mainFormHour"
          type="number"
          step="50"
          min="0"
          max="5000"
          placeholder="Hour"
        />

        <textarea
          className="mainFormDescription"
          label="Description"
          rows="10"
          cols="50"
          placeholder="Description"
        />

        <FormControl
          variant="standard"
          className="mainFormlearningTypeContainer"
          sx={{
            mb: 2,
            minWidth: 120,
            bgcolor: "white",
            fontFamily: "Poppins",
          }}
        >
          <InputLabel
            id="learningType-select-label"
            sx={{
              fontFamily: "Poppins",
              ml: 2.5,
              my: -0.5,
            }}
          >
            Learning type
          </InputLabel>
          <Select
            labelId="learningType-simple-select-label"
            id="learningType-simple-select"
            className="mainFormlearningType"
            value={selectedOption}
            placeholder="Learning type"
            onChange={handleChange}
            sx={{
              fontFamily: "Poppins",
              ml: 2.5,
              mr: 2.5,
              my: -0.5,
            }}
            disableUnderline
          >
            <MenuItem
              value="onsite"
              sx={{
                fontFamily: "Poppins",
              }}
            >
              Onsite
            </MenuItem>
            <MenuItem
              value="online"
              sx={{
                fontFamily: "Poppins",
              }}
            >
              Online
            </MenuItem>
            <MenuItem
              value="mixed"
              sx={{
                fontFamily: "Poppins",
              }}
            >
              Mixed
            </MenuItem>
          </Select>
        </FormControl>

        <input
          className="mainFormLocation"
          type="text"
          autocomplete="off"
          spellcheck="false"
          placeholder="Location"
          aria-invalid="false"
        />

        <input
          className="mainFormStatus"
          disabled="true"
          type="text"
          autocomplete="off"
          spellcheck="false"
          placeholder="unpublished"
          aria-invalid="false"
        />

        <button className="mainFormSubmit">Create</button>
      </div>
    </div>
  );
}

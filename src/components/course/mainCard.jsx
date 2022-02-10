import React from "react";
import "./mainCard.css";
import Dropdown from 'react-dropdown';
import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';


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
        <input 
          className="mainFormStartDate"
          id="start"
          type="date"/>
        <label for="finish">Finish date:</label>
        <input 
          className="mainFormFinishDate"
          id="finish"
          type="date"/>
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
          rows="10" cols="50"/>

        <Box sx={{ minWidth: 120 }}>
          <InputLabel id="learningType-select-label">Learning type</InputLabel>
            <Select
              labelId="learningType-simple-select-label"
              id="learningType-select-label"
              className="mainFormlearningType"
              value={selectedOption}
              placeholder="Learning type"
              onChange={handleChange}
            >
              <MenuItem value="onsite">Onsite</MenuItem>
              <MenuItem value="online">Online</MenuItem>
              <MenuItem value="mixed">Mixed</MenuItem>
            </Select>
        </Box>

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

import React, { useState, useEffect } from "react";
import "./searchCategory.css";
import SearchResultCard from "./SearchResultCard";
import { CloseOutlined, AddCircle } from "@mui/icons-material";
import axios from "axios";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";

var APIHandler = require("../api/APIHandler");

export default function SearchCategory({ cookie, setCookie, removeCookie }) {
  const [push, setPush] = useState(false);

  const [course, setCourse] = useState(null);

  const [displayState, setDisplayState] = useState(false);

  const [courseId, setCourseID] = useState(null);

  const [dataCourse, setDataCourse] = useState({
    id: "",
    courseName: "",
    subject: "",
    lesson: "",
    price: "",
    timeSlots: "",
    capacity: "",
    status: "",
    learningType: "",
  });

  useEffect(() => {
    APIHandler.handleSearchCourse(cookie, setCourse);
  }, [push]);

  return (
    <>
      <div className="searchCategoryWrapper">
        <div className="searchCatergoryHeader"> : Search Result Course </div>
        <div className="searchCategoryContent">
          <SearchResultCard />
        </div>
      </div>
      <div className="searchCategoryWrapper">
        <div className="searchCatergoryHeader"> : Search Result Tutor </div>
        <div className="searchCategoryContent">
          <SearchResultCard />
        </div>
      </div>
      <div className="searchCategoryWrapper">
        <div className="searchCatergoryHeader"> : Search Result Subject </div>
        <div className="searchCategoryContent">
          <SearchResultCard />
        </div>
      </div>
    </>
  );
}

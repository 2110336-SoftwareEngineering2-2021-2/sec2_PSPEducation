import React, { useState, useEffect } from "react";
import "./searchCategory.css";
import SearchResultCard from "./SearchResultCard";
import { CloseOutlined, AddCircle } from "@mui/icons-material";
import axios from "axios";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";

var APIHandler = require("../api/APIHandler");

export default function SearchCategory({ cookie, setCookie, removeCookie }) {
  const [displayState, setDisplayState] = useState(false);

  const [course, setCourse] = useState(null);

  const [courseId, setCourseID] = useState(null);

  const [dataCourse, setDataCourse] = useState({
    id: "",
    courseName: "",
    subject: "",
    description: "",
    lesson: "",
    price: "",
    timeSlots: "",
    capacity: "",
    status: "",
    learningType: "",
  });

  const [push, setPush] = useState(false);

  useEffect(() => {
    APIHandler.handleSearchCourse(cookie, setCourse);
  }, [push]);

  return (
    <>
      <SearchByPane
        searchTitle="Course"
        course={course}
        push={push}
        setPush={setPush}
      />
      <SearchByPane
        searchTitle="Tutor"
        course={course}
        push={push}
        setPush={setPush}
      />
      <SearchByPane
        searchTitle="Subject"
        course={course}
        push={push}
        setPush={setPush}
      />
    </>
  );
}

function SearchByPane({ searchTitle, course, push, setPush }) {
  return (
    <div className="searchCategoryWrapper">
      <div className="searchCatergoryHeader"> : Search by {searchTitle} </div>
      <div className="searchCategoryContent">
        {course &&
          course.map((data, key) => {
            return (
              <SearchResultCard
                key={key}
                courseName={data.courseName}
                subject={data.subject}
                description={data.description}
                tutorName={data.tutorName}
                location={data.location}
                price={data.price}
                studentN={data.students.length}
                capacity={data.capacity}
                courseID={data.courseID}
                push={push}
                setPush={setPush}
              />
            );
          })}
      </div>
    </div>
  );
}

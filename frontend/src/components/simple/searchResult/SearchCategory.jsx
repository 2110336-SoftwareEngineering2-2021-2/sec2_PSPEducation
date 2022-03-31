import React, { useState, useEffect } from "react";
import "./searchCategory.css";
import SearchResultCard from "./SearchResultCard";
import { CloseOutlined, AddCircle } from "@mui/icons-material";
import axios from "axios";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";

var APIHandler = require("../api/APIHandler");

export default function SearchCategory({
  cookie,
  setCookie,
  removeCookie,
  keyword,
}) {
  const [course, setCourse] = useState(null);

  const [push, setPush] = useState(false);

  useEffect(() => {
    APIHandler.handleSearchCourse(cookie, setCourse);
  }, [push]);

  return (
    <>
      <SearchByPane
        searchType="Course"
        keyword={keyword.toLowerCase()}
        course={course}
        push={push}
        setPush={setPush}
      />
      <SearchByPane
        searchType="Tutor"
        keyword={keyword.toLowerCase()}
        course={course}
        push={push}
        setPush={setPush}
      />
      <SearchByPane
        searchType="Subject"
        keyword={keyword.toLowerCase()}
        course={course}
        push={push}
        setPush={setPush}
      />
    </>
  );
}

function SearchByPane({ searchType, keyword, course, push, setPush }) {
  return (
    <div className="searchCategoryWrapper">
      <div className="searchCatergoryHeader"> : Search by {searchType} </div>
      <div className="searchCategoryContent">
        {course &&
          course.map((data, key) => {
            if (
              searchType === "Course" &&
              (data.courseName === undefined ||
                data.courseName.toLowerCase().search(keyword) === -1 ||
                data.status === "unpublished")
            ) {
              return <div></div>;
            } else if (
              searchType === "Tutor" &&
              (data.tutorName === undefined ||
                data.tutorName.toLowerCase().search(keyword) === -1 ||
                data.status === "unpublished")
            ) {
              return <div></div>;
            } else if (
              searchType === "Subject" &&
              (data.subject === undefined ||
                data.subject.toLowerCase().search(keyword) === -1 ||
                data.status === "unpublished")
            ) {
              return <div></div>;
            }

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
                courseID={data._id}
                push={push}
                setPush={setPush}
              />
            );
          })}
      </div>
    </div>
  );
}

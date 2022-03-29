import React, { useState, useEffect } from "react";
import "./myEnrollCourseTable.css";
import { CloseOutlined, AddCircle } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

var APIHandler = require("../../../simple/api/APIHandler");

export default function MyEnrollCourseTable({
  cookie,
  setCookie,
  removeCookie,
}) {
  const [push, setPush] = useState(false);

  const [enroll, setEnroll] = useState(null);

  useEffect(() => {
    APIHandler.handleFetchEnroll(cookie, setEnroll);
  }, [push]);

  const columns = [
    // { field: "_id", headerName: "ID", width: 80 },
    // { field: "courseId", headerName: "Course id", width: 250 },
    { field: "courseName", headerName: "Course Name", width: 250 },
    { field: "lesson", headerName: "Lesson", width: 120 },
    { field: "status", headerName: "Status", width: 120 },
    {
      field: "learningType",
      headerName: "LearningType",
      width: 150,
    },
    {
      field: "location",
      headerName: "Location",
      width: 150,
    },
    {
      field: "studentCount",
      headerName: "#Student",
      width: 150,
    },
    {
      field: "capacity",
      headerName: "MaxCapacity",
      width: 150,
    },
    {
      field: "action",
      headerName: "Action",
      width: 250,
      renderCell: (params) => {
        return (
          <>
            {/* <button className="coursePublishButton">enroll</button> */}

            <button className="enrollCancelButton">cancel</button>
          </>
        );
      },
    },
  ];

  console.log(enroll);

  return (
    <div className="mainEnroll">
      <div className="mainEnrollTopper">
        <div className="mainEnrollTitle">List Enroll</div>
      </div>

      <div className="mainEnrollTable">
        <DataGrid
          autoHeight
          rows={enroll}
          columns={columns}
          getRowId={(r) => r._id}
          disableSelectionOnClick
          checkboxSelection
        />
      </div>
    </div>
  );
}

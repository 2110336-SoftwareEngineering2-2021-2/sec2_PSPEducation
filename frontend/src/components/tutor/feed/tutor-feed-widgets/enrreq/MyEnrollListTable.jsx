import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./myEnrollListTable.css";

var APIHandler = require("../../../../simple/api/APIHandler");

export default function MyEnrollListTable({ cookie, setCookie, removeCookie }) {
  const [push, setPush] = useState(false);
  const [enroll, setEnroll] = useState({});

  useEffect(() => {
    APIHandler.handleFetchEnroll(cookie, setEnroll);
  }, [push]);

  const columns = [
    { field: "studentName", headerName: "Student Name", width: 200 },
    { field: "courseName", headerName: "Course Name", width: 200 },
    { field: "subject", headerName: "Subject", width: 150 },
    { field: "lesson", headerName: "Lesson", width: 150 },
    {
      field: "studentCount",
      headerName: "Student Count",
      width: 140,
    },
    {
      field: "capacity",
      headerName: "Capacity",
      width: 140,
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <button
              className="enrollApproveButton"
              onClick={() => {
                APIHandler.handleTutorApproveEnroll(
                  true,
                  params.id,
                  push,
                  setPush
                );
              }}
            >
              Approved
            </button>

            <button
              className="enrollRejectButton"
              onClick={() => {
                APIHandler.handleTutorApproveEnroll(
                  false,
                  params.id,
                  push,
                  setPush
                );
              }}
            >
              Rejected
            </button>
          </>
        );
      },
    },
  ];

  return (
    <div className="mainEnroll">
      <div className="mainEnrollTopper">
        <div className="mainEnrollTitle">Enrollment Request</div>
      </div>

      <div className="mainEnrollTable">
        <DataGrid
          rows={enroll}
          columns={columns}
          getRowId={(row) => row._id}
          disableSelectionOnClick
          checkboxSelection
        />
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import "./myEnrollCourseTable.css";
import { DataGrid } from "@mui/x-data-grid";

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
      field: "price",
      headerName: "Price",
      width: 100,
    },
    {
      field: "action",
      headerName: "Action",
      width: 100,
      renderCell: (params) => {
        return (
          <>
            {params.row.status === "waiting" && (
              <button
                className="enrollCancelButton"
                onClick={() => {
                  APIHandler.handleStudentCancelEnroll(
                    cookie,
                    params.id,
                    push,
                    setPush
                  );
                }}
              >
                cancel
              </button>
            )}
          </>
        );
      },
    },
  ];

  return (
    <div className="mainEnroll">
      <div className="mainEnrollTopper">
        <div className="mainEnrollTitle">Course Enrollment</div>
      </div>

      <div className="mainEnrollTable">
        <DataGrid
          autoHeight
          rows={enroll}
          columns={columns}
          getRowId={(row) => row._id}
          initialState={{
            sorting: {
              sortModel: [{ field: "status", sort: "desc" }],
            },
            pagination: {
              pageSize: 10,
            },
          }}
          rowsPerPageOptions={[5, 10]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
}

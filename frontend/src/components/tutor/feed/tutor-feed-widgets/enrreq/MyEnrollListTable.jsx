import React, { useState, useEffect } from "react";
import { CloseOutlined, SettingsPhoneRounded } from "@mui/icons-material";
import UpdateCourseCard from "./update/UpdateCourseCard";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import "./myEnrollListTable.css";

export default function MyEnrollListTable({ cookie, setCookie, removeCookie }) {
  const [push, setPush] = useState(false);
  const [course, setCourse] = useState({});
  const [enroll, setEnroll] = useState([]);

  useEffect(() => {
    const FetchAPI = async () => {
      try {
        axios
          .get(`http://localhost:3000/enroll/waiting/tutor/${cookie.user}`, {
            withCredentials: true,
          })
          .then((response) => {
            setCourse(response.data);

            const getRowAddInfo = async (eachRow, i) => {
              axios
                .get(`http://localhost:3000/course/${eachRow.courseId}`, {
                  withCredentials: true,
                })
                .then((response2) => {
                  return Object.assign({}, eachRow, {
                    studentName:
                      eachRow.studentFirstName + " " + eachRow.studentLastName,
                    ...response2.data,
                    studentCount: response2.data.students.length,
                  });
                })
                .then((tmp) => {
                  // setEnroll(prevEnroll => [...prevEnroll, { [i]: tmp } ]);
                  setEnroll(Object.assign([], enroll, { [i]: tmp }));
                  // console.log(Object.assign([], enroll, [{ [i]: tmp }]));
                });
            };

            for (let i = 0; i < 1; i++) {
              getRowAddInfo(response.data[i], i.toString());
            }
            console.log(enroll);
          });
      } catch (e) {
        console.log(e);
      }
    };

    FetchAPI();
  }, [push]);

  const handleApprove = (isApproved, id) => {
    console.log(id);
    if (isApproved) {
      axios.patch(
        `http://localhost:3000/enroll/${id}`,
        { status: "approved" },
        { withCredentials: true }
      );
      setPush(!push);
    } else {
      axios.patch(
        `http://localhost:3000/enroll/${id}`,
        { status: "rejected" },
        { withCredentials: true }
      );
      setPush(!push);
    }
  };

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
                handleApprove(true, params.id);
              }}
            >
              Approved
            </button>

            <button
              className="enrollRejectButton"
              onClick={() => {
                handleApprove(false, params.id);
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
      <div className="mainEnrollTitle">Enrollment Request</div>
      <div className="mainEnrollTable">
        <DataGrid
          rows={course}
          columns={columns}
          getRowId={(row) => row._id}
          disableSelectionOnClick
          checkboxSelection
        />
      </div>
    </div>
  );
}

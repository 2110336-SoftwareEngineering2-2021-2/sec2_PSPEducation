import React, { useState, useEffect } from "react";
import { CloseOutlined } from "@mui/icons-material";
import UpdateCourseCard from "./update/UpdateCourseCard";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import "./myEnrollListTable.css";

export default function MyEnrollListTable({ cookie, setCookie, removeCookie }) {
  const [push, setPush] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/enroll/waiting/${cookie.user}`, {
        withCredentials: true,
      })
      .then((response) => {
        // const data = response.data
        setCourse(response.data);
        // console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [push]);

  const [course, setCourse] = useState(null);

  const [displayState, setDisplayState] = useState(false);

  const [courseId, setCourseID] = useState(null);

  const [enroll, setEnroll] = useState({
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

  // const handleChange = (prop) => (event) => {
  //   setEnroll({
  //     ...enroll,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  const handleEdit = (id) => {
    // console.log()
    axios
      .get(`http://localhost:3000/course/${id}`, { withCredentials: true })
      .then((response) => {
        setEnroll(response.data);
        setCourseID(id);
      })
      .catch((e) => {
        console.log(e);
      });
  };

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
    // { field: "_id", headerName: "ID", width: 80 },
    { field: "studentName", headerName: "Student Name", width: 280 },
    { field: "courseName", headerName: "Course Name", width: 200 },
    { field: "lesson", headerName: "Lesson", width: 220 },
    {
      field: "price",
      headerName: "Price ฿",
      width: 150,
    },
    {
      field: "capacity",
      headerName: "Capacity",
      width: 100,
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <button
              className="courseEditButton"
              onClick={() => {
                setDisplayState(true);
                setEnroll({ id: params.id });
                handleEdit(params.id);
                // console.log(params.id);
              }}
            >
              Edit
            </button>
            {params.row.status === "rejected" && (
              <button
                className="coursePublishButton"
                onClick={() => handleApprove(false, params.id)}
              >
                Rejected
              </button>
            )}
            {params.row.status === "approved" && (
              <button
                className="coursePublishButton"
                onClick={() => handleApprove(true, params.id)}
              >
                Approved
              </button>
            )}
          </>
        );
      },
    },
  ];

  return (
    <div className="mainCourse">
      <div className="mainCourseTitle">Enrollment Request</div>
      <div className="mainCourseTable">
        <DataGrid
          rows={course}
          columns={columns}
          getRowId={(r) => r._id}
          disableSelectionOnClick
          checkboxSelection
          setTrigger={setDisplayState}
        />
      </div>
      <EditCoursePopup
        className=""
        trigger={displayState}
        setTrigger={setDisplayState}
        data={enroll}
        setData={setEnroll}
        id={courseId}
      />
    </div>
  );
}

function EditCoursePopup(props) {
  // console.log(props)
  return props.trigger ? (
    <div className="viewEditCoursePopup">
      <div className="viewEditCoursePopupContainer">
        <button
          className="closeEditCoursePopup"
          onClick={() => props.setTrigger(false)}
        >
          <CloseOutlined />
        </button>
        <UpdateCourseCard
          id={props.id}
          data={props.data}
          firstname={props.firstname}
          setTrigger={props.setTrigger}
          setData={props.setData}
        />
      </div>
    </div>
  ) : (
    ""
  );
}

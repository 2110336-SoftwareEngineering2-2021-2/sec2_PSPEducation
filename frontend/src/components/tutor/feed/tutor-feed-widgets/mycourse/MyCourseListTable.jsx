import React, { useState, useEffect } from "react";
import "./myCourseListTable.css";
import { CloseOutlined, AddCircle } from "@mui/icons-material";
import UpdateCourseCard from "./update/UpdateCourseCard";
import { DataGrid } from "@mui/x-data-grid";

var APIHandler = require("../../../../simple/api/APIHandler");

export default function MyCourseListTable({ cookie, setCookie, removeCookie }) {
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
    APIHandler.handleUpdateTutorCourse(cookie, setCourse);
  }, [push]);

  const columns = [
    // { field: "_id", headerName: "ID", width: 80 },
    { field: "courseName", headerName: "Course name", width: 280 },
    { field: "subject", headerName: "Subject", width: 200 },
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
                setDataCourse({ id: params.id });
                APIHandler.handleEditCourse(
                  params.id,
                  setDataCourse,
                  setCourseID
                );
                // console.log(params.id);
              }}
            >
              Edit
            </button>
            {params.row.status === "unpublished" && (
              <button
                className="coursePublishButton"
                onClick={() =>
                  APIHandler.handlePublishCourse(
                    false,
                    params.id,
                    push,
                    setPush
                  )
                }
              >
                Publish
              </button>
            )}
            {params.row.status === "published" && (
              <button
                className="coursePublishButton"
                onClick={() =>
                  APIHandler.handlePublishCourse(true, params.id, push, setPush)
                }
              >
                Unpublish
              </button>
            )}
          </>
        );
      },
    },
  ];

  return (
    <div className="mainCourse">
      <div className="mainCourseTopper">
        <div className="mainCourseTitle">List Course</div>

        <div className="mainCourseAddCourse">
          <button
            className="mainCourseAddCourseButton"
            onClick={() => setDisplayState(true)}
          >
            <div>
              <span className="">Add Course</span>
              <AddCircle className="mainCourseAddCourseButtonIcon" />
            </div>
          </button>
        </div>
      </div>

      <div className="mainCourseTable">
        <DataGrid
          rows={course}
          columns={columns}
          getRowId={(r) => r.id}
          disableSelectionOnClick
          checkboxSelection
          setTrigger={setDisplayState}
        />
      </div>

      <EditCoursePopup
        className=""
        trigger={displayState}
        setTrigger={setDisplayState}
        data={dataCourse}
        setData={setDataCourse}
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

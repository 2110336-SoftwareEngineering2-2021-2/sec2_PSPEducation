import React, { useState } from "react";
import "./mainCourseCard.css";
// import ReactTable from "react-table-v6";
// import "react-table-v6/react-table.css";
import { CloseOutlined } from "@mui/icons-material";
// import "react-datepicker/dist/react-datepicker.css";
import UpdateCourseCard from "./update/UpdateCourseCard";
import { listCourseRows } from "../../../../dummyData";
import { DataGrid } from "@mui/x-data-grid";

export default function MainCourseCard() {
  const [displayState, setDisplayState] = useState(false);
  const [dataCourse, setDataCourse] = useState({
    id: "",
    courseName: "",
    subject: "",
    lesson: "",
    price: "",
    courseStartDate: new Date(),
    courseFinishDate: new Date(),
    timeSlots: "",
    capacity: "",
    status: "",
    learningType: "",
  });

  const handleDelete = (id) => {
    setDataCourse(dataCourse.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 80 },
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
                setDataCourse(params.row.id);
              }}
            >
              Edit
            </button>
            <button
              className="coursePublishButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Publish
            </button>
          </>
        );
      },
    },
  ];

  return (
    <div className="mainCourse">
      <div className="mainCourseTitle">List Course</div>
      <div className="mainCourseTable">
        <DataGrid
          rows={listCourseRows}
          columns={columns}
          pageSize={10}
          disableSelectionOnClick
          checkboxSelection
          disableColumnSelector
          setTrigger={setDisplayState}
        />
      </div>
      <EditCoursePopup
        className=""
        trigger={displayState}
        setTrigger={setDisplayState}
        data={dataCourse}
        setData={setDataCourse}
      />
    </div>
  );
}

function EditCoursePopup(props) {
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

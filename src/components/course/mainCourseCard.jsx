import React, { useState } from "react";
import "./mainCourseCard.css";
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";
import { CloseOutlined, DeleteOutline } from "@mui/icons-material";
import "react-datepicker/dist/react-datepicker.css";
import UpdateCourseCard from "./update/UpdateCourseCard";
import { listCourseRows } from "../../dummyData";
import { DataGrid } from "@mui/x-data-grid";

export default function MainCourseCard() {
  const [displayState, setDisplayState] = useState(false);
  const [dataCourse, setDataCourse] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    phoneNumber: "",
    displayNumber: "",
    birthdate: "",
    gender: "",
    educationLevel: "",
    citizenId: "",
    citizenImage: "",
    profession: "",
    imgAvatarURL: "",
    imgBgURL: "",
  });

  const handleDelete = (id) => {
    setDataCourse(dataCourse.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID" },
    { field: "courseName", headerName: "Course name", width: 120 },
    { field: "subject", headerName: "Subject", width: 120 },
    { field: "lesson", headerName: "Lesson", width: 120 },
    {
      field: "price",
      headerName: "Price",
      width: 120,
    },
    {
      field: "capacity",
      headerName: "Capacity",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
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
          </>
        );
      },
    },
    {
      field: "publish",
      headerName: "Publish",
      renderCell: (params) => {
        return (
          <>
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
      <div style={{ height: "900", width: "100%", overflow: "auto" }}>
        <DataGrid
          rows={listCourseRows}
          disableSelectionOnClick
          columns={columns}
          pageSize={8}
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
      />
    </div>
  );
}

function EditCoursePopup(props) {
  return props.trigger ? (
    <div className="viewPopup">
      <div className="viewPopupContainer">
        <button className="closePopup" onClick={() => props.setTrigger(false)}>
          <CloseOutlined />
        </button>
        <UpdateCourseCard
          firstname={props.firstname}
          lastname={props.lastname}
          username={props.username}
          email={props.email}
          phoneNumber={props.phoneNumber}
          displayNumber={props.displayNumber}
          birthdate={props.birthdate}
          gender={props.gender}
          educationLevel={props.educationLevel}
          citizenId={props.citizenId}
          citizenImage={props.citizenImage}
          profession={props.profession}
          imgAvatarURL={props.imgAvatarURL}
          imgBgURL={props.imgBgURL}
          setTrigger={props.setTrigger}
          setData={props.setData}
        />
      </div>
    </div>
  ) : (
    ""
  );
}

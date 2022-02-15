import React, { useState, useEffect } from "react";
import "./mainCourseCard.css";
import { CloseOutlined } from "@mui/icons-material";
import UpdateCourseCard from "./update/UpdateCourseCard";
import { listCourseRows } from "../../../../dummyData";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

export default function MainCourseCard({ cookie, setCookie, removeCookie }) {
  const [push, setPush] = useState(false);
  
  useEffect(() => {
    axios
    .get(`http://localhost:3000/course/tutor/${cookie.user}`, { withCredentials: true })
    .then((response) => {
      // const data = response.data
      setCourse(response.data)
      // console.log(response);
    })
    .catch((e) => {
      console.log(e);
    });
  }, [`http://localhost:3000/course/${cookie.user}`, push]);
  const [course, setCourse] = useState(null)
  const [displayState, setDisplayState] = useState(false);
  const [courseId, setCourseID] = useState(null);
  const [dataCourse, setDataCourse] = useState({
    // id: "",
    // courseName: "",
    // subject: "",
    // lesson: "",
    // price: "",
    // courseStartDate: new Date(),
    // courseFinishDate: new Date(),
    // timeSlots: "",
    // capacity: "",
    // status: "",
    // learningType: "",
  });
  const handleEdit = (id) => {
    // console.log()
    axios
      .get(`http://localhost:3000/course/${id}`, { withCredentials: true })
      .then((response) => {
        setDataCourse(response.data)
        setCourseID(id)
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const handleDelete = (id) => {
    setDataCourse(dataCourse.filter((item) => item.id !== id));
  };

  const handlePublish = (isPublished, id) =>{
    console.log(id)
    if (isPublished){
      axios
      .patch(`http://localhost:3000/course/update/status/${id}`, {"status":"unpublished"}, { withCredentials: true })
      setPush(!push)
    } else {
      axios
      .patch(`http://localhost:3000/course/update/status/${id}`, {"status":"published"}, { withCredentials: true })
      setPush(!push)
    }
  };
  
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
                setDataCourse({"id":params.id});
                handleEdit(params.id);
                // console.log(params.id);
              }}
            >
              Edit
            </button>
            {params.row.status==="unpublished" &&<button
              className="coursePublishButton"
              onClick={() => handlePublish(false, params.id)}
            >
              Publish
            </button>}
            {params.row.status=="published" &&<button
              className="coursePublishButton"
              onClick={() => handlePublish(true, params.id)}
            >
              Unpublish
            </button>}
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
          rows={course}
          columns={columns}
          pageSize={10}
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
          id = {props.id}
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

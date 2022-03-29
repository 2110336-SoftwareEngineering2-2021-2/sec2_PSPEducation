import React, { useState, useEffect } from "react";
import "./paymentListTable.css";
import { CloseOutlined, AddCircle } from "@mui/icons-material";
// import UpdateCourseCard from "./update/UpdateCourseCard";
import { DataGrid } from "@mui/x-data-grid";

var APIHandler = require("../simple/api/APIHandler");

export default function PaymentListTable({
  cookie,
  //   setCookie,
  //   removeCookie,
  //   trigger,
  //   setTrigger,
}) {
  const [push, setPush] = useState(false);

  const [payment, setPayment] = useState(null);

  //   const [displayState, setDisplayState] = useState(false);

  //   const [paymentId, setPaymentID] = useState(null);

  //   const [dataPayment, setDataPayment] = useState({
  //     id: "",
  //     date: "",
  //     description: "",
  //     studentName: "",
  //     price: "",
  //     courseName: "",
  //     paymentMethod: "",
  //     status: "",
  //   });

  useEffect(() => {
    APIHandler.handleFetchPayment(cookie, setPayment);
  }, [push]);

  const columns = [
    // { field: "_id", headerName: "ID", width: 80 },
    // { field: "date", headerName: "Payment Date", width: 200 },
    { field: "description", headerName: "Description", width: 200 },
    { field: "studentName", headerName: "Student Name", width: 200 },
    {
      field: "price",
      headerName: "Price(฿)",
      width: 150,
    },
    // {
    //   field: "capacity",
    //   headerName: "Capacity",
    //   width: 100,
    // },
    // {
    //   field: "action",
    //   headerName: "Action",
    //   width: 200,
    //   renderCell: (params) => {
    //     return (
    //       <>
    //         <button
    //           className="courseEditButton"
    //           onClick={() => {
    //             setDisplayState(true);
    //             setDataCourse({ id: params.id });
    //             APIHandler.handleGetCourseByID(
    //               params.id,
    //               setDataCourse,
    //               setCourseID
    //             );
    //             // console.log(params.id);
    //           }}
    //         >
    //           Edit
    //         </button>
    //         {params.row.status === "unpublished" && (
    //           <button
    //             className="coursePublishButton"
    //             onClick={() =>
    //               APIHandler.handlePublishCourse(
    //                 false,
    //                 params.id,
    //                 push,
    //                 setPush
    //               )
    //             }
    //           >
    //             Publish
    //           </button>
    //         )}
    //         {params.row.status === "published" && (
    //           <button
    //             className="coursePublishButton"
    //             onClick={() =>
    //               APIHandler.handlePublishCourse(true, params.id, push, setPush)
    //             }
    //           >
    //             Unpublish
    //           </button>
    //         )}
    //       </>
    //     );
    //   },
    // },
  ];

  return (
    <div className="paymentHistory">
      <div className="paymentHistoryTopper">
        <div className="paymentHistoryTitle">Payment History</div>
      </div>
      <div className="paymentHistoryTable">
        <DataGrid
          rows={payment}
          columns={columns}
          getRowId={(r) => r._id}
          disableSelectionOnClick
          //   checkboxSelection
          //   setTrigger={setDisplayState}
        />
      </div>
    </div>
  );
}

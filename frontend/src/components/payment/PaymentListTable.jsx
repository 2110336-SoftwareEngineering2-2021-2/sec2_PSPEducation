import React, { useState, useEffect } from "react";
import "./paymentListTable.css";
import { CloseOutlined, AddCircle } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";

var APIHandler = require("../simple/api/APIHandler");

export default function PaymentListTable({ cookie, setCookie, removeCookie }) {
  const [push, setPush] = useState(false);

  const [payment, setPayment] = useState(null);

  const [user, setUser] = useState(null);

  const paymentType = {
    0: "topup",
    1: "buy course",
    2: "refund course",
    3: "course cost received",
  };

  function checkName(name) {
    if (name === null || name === "") return "-";
    else return name;
  }

  useEffect(() => {
    APIHandler.handleFetchPayment(cookie, setPayment);
  }, []);
  console.log(payment);
  const columns = [
    {
      field: "dateCreated",
      headerName: "Payment Date",
      width: 150,
      valueGetter: (params) =>
        `${params.row.dateTimeCreated.slice(0, 10) || ""}`,
    },
    {
      field: "timeCreated",
      headerName: "Payment Time",
      width: 150,
      valueGetter: (params) =>
        `${params.row.dateTimeCreated.slice(12, 20) || ""}`,
    },
    {
      field: "type",
      headerName: "Description",
      width: 150,
      valueGetter: (params) => `${paymentType[params.row.type] || ""}`,
    },
    {
      field: "courseName",
      headerName: "Course Name",
      width: 200,
      valueGetter: (params) => `${checkName(params.row.courseName) || ""}`,
    },
    {
      field: "amount",
      headerName: "Amount ฿",
      width: 120,
    },
    {
      field: "status",
      headerName: "status",
      width: 150,
    },
    {
      field: "id",
      headerName: "Transaction ID",
      width: 300,
      valueGetter: (params) => `${params.row._id || ""}`,
    },
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
          autoHeight
          initialState={{
            pagination: {
              pageSize: 10,
            },
          }}
        />
      </div>
    </div>
  );
}

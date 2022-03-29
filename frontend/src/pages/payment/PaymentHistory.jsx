import "./paymentHistory.css";
import Topbar from "../../components/simple/topbar/Topbar";
import Sidebar from "../../components/simple/sidebar/Sidebar";
// import PaymentFeed from "../../components/payment/PaymentFeed";
import PaymentListTable from "../../components/payment/PaymentListTable";
import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

export default function PaymentHistory({ cookie, setCookie, removeCookie }) {
  const [state, setState] = useState(false);

  useEffect(() => {
    // Update the document title using the browser API
    if (
      cookie.user === undefined ||
      cookie.user === null ||
      cookie.user === ""
    ) {
      setState(true);
    }
  }, [state]);

  return (
    <>
      <PaymentListTable cookie={cookie} />
    </>
  );
}

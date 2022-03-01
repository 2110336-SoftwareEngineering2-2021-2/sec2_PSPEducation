import GuestTopbar from "../../components/simple/topbar/GuestTopbar";
import Footer from "../../components/simple/footer/Footer";
import ReportCard from "../../components/report/ReportCard.jsx";
import "./Report.css";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Report({ cookie, setCookie, removeCookie }) {
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
      <ReportCard
        cookie={cookie}
        setCookie={setCookie}
        removeCookie={removeCookie}
      />
    </>
  );
}

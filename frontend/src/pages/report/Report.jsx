import ReportCard from "../../components/report/ReportCard";
import "./Report.css";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

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

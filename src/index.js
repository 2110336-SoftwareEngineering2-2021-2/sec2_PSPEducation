import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHome from "./pages/admin/home/AdminHome";
import TutorHome from "./pages/tutor/home/TutorHome";
import StudentHome from "./pages/student/home/StudentHome";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import App from "./App";
import {
  MyCrsComp,
  EnrollReqComp,
  MsgReqComp,
} from "./components/tutor/feed/TutorFeed";
import {
  MyCrsCompSt,
  EnrollReqCompSt,
} from "./components/student/feed/StudentFeed";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="admin" element={<AdminHome />}>
          <Route path="all" element={<MyCrsComp />} />
          <Route path="tutorvalid" element={<EnrollReqComp />} />
          <Route path="userrpt" element={<MsgReqComp />} />
        </Route>
        <Route path="tutor" element={<TutorHome />}>
          <Route path="mycourse" element={<MyCrsComp />} />
          <Route path="enrollreq" element={<EnrollReqComp />} />
          <Route path="msgreq" element={<MsgReqComp />} />
        </Route>
        <Route path="student" element={<StudentHome />}>
          <Route path="mycourse" element={<MyCrsCompSt />} />
          <Route path="enrollreq" element={<EnrollReqCompSt />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

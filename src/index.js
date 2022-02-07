import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHome from "./pages/admin/home/AdminHome";
import TutorHome from "./pages/tutor/home/TutorHome";
import StudentHome from "./pages/student/home/StudentHome";
import StudentLogin from "./pages/student/login/studentLogin";
import TutorLogin from "./pages/tutor/login/tutorLogin";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/tutor" element={<TutorHome />} />
        <Route path="/student" element={<StudentHome />} />
        <Route path="/student/login" element={<StudentLogin />} />
        <Route path="/tutor/login" element={<TutorLogin />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

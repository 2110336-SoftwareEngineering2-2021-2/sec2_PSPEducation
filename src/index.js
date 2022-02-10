import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHome from "./pages/admin/home/AdminHome";
import TutorHome from "./pages/tutor/home/TutorHome";
import StudentHome from "./pages/student/home/StudentHome";
import LoginUser from "./pages/login/LoginUser";
import LoginAdmin from "./pages/login/LoginAdmin";
import Register from "./pages/register/Register";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/tutor" element={<TutorHome />} />
        <Route path="/student" element={<StudentHome />} />
        <Route path="/user/login" element={<LoginUser />} />
        <Route path="/admin/login" element={<LoginAdmin />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

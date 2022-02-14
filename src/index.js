import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHome from "./pages/admin/home/AdminHome";
import TutorHome from "./pages/tutor/home/TutorHome";
import StudentHome from "./pages/student/home/StudentHome";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import CreateCourse from "./pages/course/CreateCourse";

import App from "./App";

import { CookiesProvider } from "react-cookie";

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>,

  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import AdminHome from "./pages/admin/home/AdminHome";
import Home from "./pages/tutor/home/Home";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/tutor" element={<Home />} />
        <Route path="/admin" element={<AdminHome />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

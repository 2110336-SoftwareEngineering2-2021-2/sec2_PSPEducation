import "./app.css";

import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import AdminHome from "./pages/admin/home/AdminHome";
import Home from "./pages/tutor/home/Home";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="tutor" element={<Home />} />
          <Route path="admin" element={<AdminHome />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

function Layout() {
  return (
    <div>
      <h3>Please access via following links:</h3>
      <hr />
      <nav>
        <ul>
          <li>
            <Link to="/tutor">TutorHome</Link>
          </li>
          <li>
            <Link to="/admin">AdminHome</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

function Navbar() {
  return (
    <>
      <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
            <div className="topLeftContainer">
              <span className="topLeftlogo">WhereIsMyTutor?</span>
              <span className="topLeftauthor">Powered by PSPEducaion</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

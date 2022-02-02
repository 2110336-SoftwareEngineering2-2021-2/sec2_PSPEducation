import "./app.css";

import * as React from "react";
import { NavLink } from "react-router-dom";
import AdminHome from "./pages/admin/home/AdminHome";
import TutorHome from "./pages/tutor/home/TutorHome";

function App() {
  return (
    <>
      <Layout />
    </>
  );
}

export default App;

function Layout() {
  return (
    <div>
      <FakeNavbar />
      <div className="container">
        <h3>Please access via following links:</h3>
        <hr />
        <ul>
          <li>
            <NavLink to="/tutor">TutorHome</NavLink>
          </li>
          <li>
            <NavLink to="/admin">AdminHome</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

function FakeNavbar() {
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

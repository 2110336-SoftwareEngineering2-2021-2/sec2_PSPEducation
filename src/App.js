import "./app.css";

import * as React from "react";
import Navbar from "./components/simple/navbar/Navbar";
import Footer from "./components/simple/footer/Footer";
import { NavLink } from "react-router-dom";

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
    <div className="layout">
      <Navbar />
      <div className="container">
        <h3>Please access via following links:</h3>
        <hr />
        <ul>
          <li>
            <NavLink to="/admin">AdminHome</NavLink>
          </li>
          <li>
            <NavLink to="/tutor">TutorHome</NavLink>
          </li>
          <li>
            <NavLink to="/student">StudentHome</NavLink>
          </li>
          <li>
            <NavLink to="/user/login">Login user</NavLink>
          </li>
          <li>
            <NavLink to="/admin/login">Login admin</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
        </ul>
        <div className="appFooter">
          <Footer />
        </div>
      </div>
    </div>
  );
}

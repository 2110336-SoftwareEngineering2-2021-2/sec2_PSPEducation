import "./app.css";

import * as React from "react";
import Navbar from "./components/simple/navbar/Navbar";
import Footer from "./components/simple/footer/Footer";
import { NavLink } from "react-router-dom";
import { withCookies, Cookies, useCookies } from "react-cookie";
import AdminHome from "./pages/admin/home/AdminHome";
import TutorHome from "./pages/tutor/home/TutorHome";
import StudentHome from "./pages/student/home/StudentHome";
import LoginUser from "./pages/login/LoginUser";
import LoginAdmin from "./pages/login/LoginAdmin";
import Register from "./pages/register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Component } from "react";

function App() {
  // const propTypes = {
  //   cookies: instanceOf(Cookies).isRequired,
  // };
  // state = {
  //   name: this.props.cookies.get("name") || "",
  // };
  const [cookies, setCookie] = useCookies(["name"]);
  setCookie("user", "555", { path: "/" });
  return (
    <>
      <Layout />
      <div>{cookies.name}</div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin" render={() => <AdminHome cookies={cookies} />} />
        <Route path="/tutor" render={() => <TutorHome cookies={cookies} />} />
        <Route
          path="/student"
          render={() => <StudentHome cookies={cookies} />}
        />
        <Route
          path="/user/login"
          render={() => <LoginUser cookies={cookies} />}
        />
        <Route
          path="/admin/login"
          render={() => <LoginAdmin cookies={cookies} />}
        />
        <Route path="/register" render={() => <Register cookies={cookies} />} />
      </Routes>
    </>
  );
}

export default withCookies(App);

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

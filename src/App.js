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
function App() {
  const [cookie, setCookie, removeCookie] = useCookies(["user", 'user_role']);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />

        <Route
          path="/admin"
          element={
            <AdminHome
              cookie={cookie}
              setCookie={setCookie}
              removeCookie={removeCookie}
            />
          }
        />

        <Route
          path="/tutor"
          element={
            <TutorHome
              cookie={cookie}
              setCookie={setCookie}
              removeCookie={removeCookie}
            />
          }
        />

        <Route
          path="/student"
          element={
            <StudentHome
              cookie={cookie}
              setCookie={setCookie}
              removeCookie={removeCookie}
            />
          }
        />

        <Route
          path="/user/login"
          element={
            <LoginUser
              cookie={cookie}
              setCookie={setCookie}
            />
          }
        />

        <Route
          path="/admin/login"
          element={
            <LoginAdmin
              cookie={cookie}
              setCookie={setCookie}
            />
          }
        />

        <Route
          path="/register"
          element={
            <Register
              cookie={cookie}
              setCookie={setCookie}
            />
          }
        />
      </Routes>
      {/* <div>{}</div> */}
    </>
  );
}

export default App;

function Layout() {
  // const isLoggedIn = isLoggedIn();
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

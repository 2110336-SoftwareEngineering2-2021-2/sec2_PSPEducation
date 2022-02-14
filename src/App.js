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
import CreateCourse from "./pages/course/CreateCourse";

import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import {
  MyCrsComp,
  EnrollReqComp,
  MsgReqComp,
} from "./components/tutor/feed/TutorFeed";
import {
  MyCrsCompSt,
  EnrollReqCompSt,
} from "./components/student/feed/StudentFeed";
import {
  AllCards,
  TutorValidationCards,
  UserReportCards,
} from "./components/admin/feed/AdminCards";

function App() {
  const [cookie, setCookie, removeCookie] = useCookies(["user", "user_role"]);

  return (
    <>
      <Routes>
        <Route
          path=""
          element={
            <Layout
              cookie={cookie}
              setCookie={setCookie}
              removeCookie={removeCookie}
            />
          }
        />
        <Route
          path="admin"
          element={
            <AdminHome
              cookie={cookie}
              setCookie={setCookie}
              removeCookie={removeCookie}
            />
          }
        >
          <Route
            exact
            path=""
            element={
              <AllCards
                cookie={cookie}
                setCookie={setCookie}
                removeCookie={removeCookie}
              />
            }
          />

          <Route
            path="all"
            element={
              <AllCards
                cookie={cookie}
                setCookie={setCookie}
                removeCookie={removeCookie}
              />
            }
          />

          <Route
            path="tutorvalid"
            element={
              <TutorValidationCards
                cookie={cookie}
                setCookie={setCookie}
                removeCookie={removeCookie}
              />
            }
          />

          <Route
            path="userrpt"
            element={
              <UserReportCards
                cookie={cookie}
                setCookie={setCookie}
                removeCookie={removeCookie}
              />
            }
          />
        </Route>

        <Route
          path="tutor"
          element={
            <TutorHome
              cookie={cookie}
              setCookie={setCookie}
              removeCookie={removeCookie}
            />
          }
        >
          <Route
            exact
            path=""
            element={
              <MyCrsComp
                cookie={cookie}
                setCookie={setCookie}
                removeCookie={removeCookie}
              />
            }
          />

          <Route
            path="mycourse"
            element={
              <MyCrsComp
                cookie={cookie}
                setCookie={setCookie}
                removeCookie={removeCookie}
              />
            }
          />

          <Route
            path="enrollreq"
            element={
              <EnrollReqComp
                cookie={cookie}
                setCookie={setCookie}
                removeCookie={removeCookie}
              />
            }
          />

          <Route
            path="msgreq"
            element={
              <MsgReqComp
                cookie={cookie}
                setCookie={setCookie}
                removeCookie={removeCookie}
              />
            }
          />
        </Route>

        <Route
          path="student"
          element={
            <StudentHome
              cookie={cookie}
              setCookie={setCookie}
              removeCookie={removeCookie}
            />
          }
        >
          <Route
            exact
            path=""
            element={
              <MyCrsCompSt
                cookie={cookie}
                setCookie={setCookie}
                removeCookie={removeCookie}
              />
            }
          />

          <Route
            path="mycourse"
            element={
              <MyCrsCompSt
                cookie={cookie}
                setCookie={setCookie}
                removeCookie={removeCookie}
              />
            }
          />

          <Route
            path="enrollreq"
            element={
              <EnrollReqCompSt
                cookie={cookie}
                setCookie={setCookie}
                removeCookie={removeCookie}
              />
            }
          />
        </Route>

        <Route
          path="login"
          element={
            <LoginUser
              cookie={cookie}
              setCookie={setCookie}
              removeCookie={removeCookie}
            />
          }
        />

        <Route
          path="adminlogin"
          element={
            <LoginAdmin
              cookie={cookie}
              setCookie={setCookie}
              removeCookie={removeCookie}
            />
          }
        />

        <Route
          path="register"
          element={
            <Register
              cookie={cookie}
              setCookie={setCookie}
              removeCookie={removeCookie}
            />
          }
        />

        <Route
          path="course/create"
          element={
            <CreateCourse
              cookie={cookie}
              setCookie={setCookie}
              removeCookie={removeCookie}
            />
          }
        />
      </Routes>
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
            <NavLink to="/login">Login user</NavLink>
          </li>
          <li>
            <NavLink to="/adminlogin">Login admin</NavLink>
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

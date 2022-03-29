import "./app.css";

import * as React from "react";
import GuestTopbar from "./components/simple/topbar/GuestTopbar";
import Footer from "./components/simple/footer/Footer";
import { NavLink } from "react-router-dom";
import { useCookies } from "react-cookie";
import AdminHome from "./pages/admin/home/AdminHome";
import TutorHome from "./pages/tutor/home/TutorHome";
import StudentHome from "./pages/student/home/StudentHome";
import LoginUser from "./pages/login/LoginUser";
import LoginAdmin from "./pages/login/LoginAdmin";
import Register from "./pages/register/Register";
import Report from "./pages/report/Report";
import ProfileHome from "./pages/profile/ProfileHome";
import CourseProfile from "./pages/course/CourseProfile";
import SearchResult from "./components/simple/searchResult/SearchResult";
import PaymentHistory from "./pages/payment/PaymentHistory";

import { Routes, Route } from "react-router-dom";

import {
  MyCourseList,
  MyEnrollList,
  MsgReqComp,
} from "./components/tutor/feed/TutorFeed";
import { MyEnrollCourseList } from "./components/student/feed/StudentFeed";
import {
  AllCards,
  TutorValidationCards,
  UserReportCards,
} from "./components/admin/feed/AdminCards";
import { useState } from "react";

function App() {
  const [cookie, setCookie, removeCookie] = useCookies(["user", "user_role"]);
  const [query, setQuery] = useState("");

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
              setQuery={setQuery}
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
          <Route
            path="search"
            element={
              <SearchResult
                cookie={cookie}
                setCookie={setCookie}
                removeCookie={removeCookie}
                query={query}
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
              setQuery={setQuery}
            />
          }
        >
          <Route
            exact
            path=""
            element={
              <MyCourseList
                cookie={cookie}
                setCookie={setCookie}
                removeCookie={removeCookie}
              />
            }
          />
          <Route
            path="mycourse"
            element={
              <MyCourseList
                cookie={cookie}
                setCookie={setCookie}
                removeCookie={removeCookie}
              />
            }
          />
          <Route
            path="enrollreq"
            element={
              <MyEnrollList
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
          <Route
            path="search"
            element={
              <SearchResult
                cookie={cookie}
                setCookie={setCookie}
                removeCookie={removeCookie}
                query={query}
              />
            }
          />
          <Route
            path="payment"
            element={
              <PaymentHistory
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
              setQuery={setQuery}
            />
          }
        >
          <Route
            exact
            path=""
            element={
              <MyEnrollCourseList
                cookie={cookie}
                setCookie={setCookie}
                removeCookie={removeCookie}
              />
            }
          />
          <Route
            path="mycourse"
            element={
              <MyEnrollCourseList
                cookie={cookie}
                setCookie={setCookie}
                removeCookie={removeCookie}
              />
            }
          />
          <Route
            path="search"
            element={
              <SearchResult
                cookie={cookie}
                setCookie={setCookie}
                removeCookie={removeCookie}
                query={query}
              />
            }
          />
          <Route
            path="payment"
            element={
              <PaymentHistory
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
          path="report"
          element={
            <Report
              cookie={cookie}
              setCookie={setCookie}
              removeCookie={removeCookie}
            />
          }
        />
        <Route
          path="myprofile"
          element={
            <ProfileHome
              cookie={cookie}
              setCookie={setCookie}
              removeCookie={removeCookie}
            />
          }
        />
        <Route
          path="course/:id"
          element={
            <CourseProfile
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
      <GuestTopbar />
      <div className="container">
        <h3> Please access via following links: </h3> <hr />
        <ul>
          <li>
            <NavLink to="/admin"> AdminHome </NavLink>
          </li>
          <li>
            <NavLink to="/tutor"> TutorHome </NavLink>
          </li>
          <li>
            <NavLink to="/student"> StudentHome </NavLink>
          </li>
          <li>
            <NavLink to="/login"> Login user </NavLink>
          </li>
          <li>
            <NavLink to="/adminlogin"> Login admin </NavLink>
          </li>
          <li>
            <NavLink to="/register"> Register </NavLink>
          </li>
          <li>
            <NavLink to="/search"> Search </NavLink>
          </li>
        </ul>
        <div className="appFooter">
          <Footer />
        </div>
      </div>
    </div>
  );
}

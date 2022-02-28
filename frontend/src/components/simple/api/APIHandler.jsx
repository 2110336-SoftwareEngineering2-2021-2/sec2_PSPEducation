import axios from "axios";
import { Navigate } from "react-router-dom";
import { sha512_256 } from "js-sha512";

const handleLogin = async (
  position,
  email,
  password,
  state,
  setState,
  cookie,
  setCookie
) => {
  // var passwordHash = sha512_256(password);

  const user = { email, password };
  const userURL = `http://localhost:3000/auth/signin`;
  const adminURL = `http://localhost:3000/auth/admin/signin`;

  var requestURL = position === "admin" ? adminURL : userURL;

  axios
    .post(requestURL, user, {
      withCredentials: true,
    })
    .then((response) => {
      const data = response.data;
      console.log(response);
      setCookie("user", data.id);
      setCookie("user_role", data.type);
      setState(true);
      if (data.type === "tutor") {
        return <Navigate to="/tutor" />;
      } else if (data.type === "student") {
        return <Navigate to="/student" />;
      } else if (data.type === "admin") {
        return <Navigate to="/admin" />;
      }
    })
    .catch((e) => {
      console.log(e);
    });
};

const handleLogout = async (
  state,
  setState,
  cookie,
  setCookie,
  removeCookie
) => {
  // console.log("Logging Out");
  axios
    .post(`http://localhost:3000/auth/signout`, {}, { withCredentials: true })
    .then((response) => {
      // console.log("Signout request was sent to the server.");
      removeCookie("user");
      removeCookie("user_role");
      setState(true);
    })
    .catch((e) => {
      console.log(e);
      removeCookie("user");
      removeCookie("user_role");
      setState(true);
    });
};

const handleEditCourse = (id, setDataCourse, setCourseID) => {
  // console.log()
  axios
    .get(`http://localhost:3000/course/${id}`, { withCredentials: true })
    .then((response) => {
      setDataCourse(response.data);
      setCourseID(id);
    })
    .catch((e) => {
      console.log(e);
    });
};

const handlePublishCourse = (isPublished, id, push, setPush) => {
  console.log(id);
  if (isPublished) {
    axios.patch(
      `http://localhost:3000/course/update/status/${id}`,
      { status: "unpublished" },
      { withCredentials: true }
    );
    setPush(!push);
  } else {
    axios.patch(
      `http://localhost:3000/course/update/status/${id}`,
      { status: "published" },
      { withCredentials: true }
    );
    setPush(!push);
  }
};

const handleUpdateTutorCourse = (cookie, setCourse) => {
  axios
    .get(`http://localhost:3000/course/tutor/${cookie.user}`, {
      withCredentials: true,
    })
    .then((response) => {
      // const data = response.data
      setCourse(response.data);
      // console.log(response);
    })
    .catch((e) => {
      console.log(e);
    });
};

export {
  handleLogin,
  handleLogout,
  handleEditCourse,
  handlePublishCourse,
  handleUpdateTutorCourse,
};

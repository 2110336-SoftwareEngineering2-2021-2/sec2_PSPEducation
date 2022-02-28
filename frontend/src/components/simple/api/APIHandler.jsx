import axios from "axios";
import { Navigate } from "react-router-dom";
import { sha512_256 } from "js-sha512";
import { CompressOutlined } from "@mui/icons-material";

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

const handleGetTutorValidCard = async (tutorData, setTutorData) => {
  axios
    .get(`http://localhost:3000/admin/register/waiting`, {
      withCredentials: true,
    })
    .then((response) => {
      setTutorData(response.data);
      // console.log(response.data);
    })
    .catch((e) => {
      console.log(e);
    });
};

const handleGetReportCard = async (reportData, setReportData) => {
  var tmpList = [];
  axios
    .get(`http://localhost:3000/admin/report/waiting`, {
      withCredentials: true,
    })
    .then((response) => {
      response.data.map((item) => {
        axios
          .get(`http://localhost:3000/auth/user/${item.userId}`, {
            withCredentials: true,
          })
          .then((response) => {
            tmpList.push({ ...item, username: response.data.username });
          });
      });
    })
    .then(() => {
      setReportData(tmpList);
    });
};

export {
  handleLogin,
  handleLogout,
  handleEditCourse,
  handlePublishCourse,
  handleUpdateTutorCourse,
  handleGetTutorValidCard,
  handleGetReportCard,
};

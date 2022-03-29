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
      if (e.response.status === 400) {
        alert("Login Failed: Incorrect Username or Password");
      } else {
        alert("Internal Server Error");
      }
    });
};

const handleLogout = async (
  state,
  setState,
  cookie,
  setCookie,
  removeCookie
) => {
  axios
    .post(`http://localhost:3000/auth/signout`, {}, { withCredentials: true })
    .then((response) => {
      removeCookie("user");
      removeCookie("user_role");
      setState(true);
      sessionStorage.clear();
    })
    .catch((e) => {
      console.log(e);
      removeCookie("user");
      removeCookie("user_role");
      setState(true);
      sessionStorage.clear();
    });
};

const handleGetCourseByID = (id, setDataCourse, setCourseID) => {
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

const handleFetchCourse = async (cookie, setCourse) => {
  axios
    .get(`http://localhost:3000/course/tutor/${cookie.user}`, {
      withCredentials: true,
    })
    .then((response) => {
      setCourse(response.data);
    })
    .catch((e) => {
      console.log(e);
    });
};

const handleSearchCourse = async (cookie, setCourse) => {
  axios
    .get(`http://localhost:3000/course`, {
      withCredentials: true,
    })
    .then((response) => {
      setCourse(response.data);
      // console.log(response.data);
    })
    .catch((e) => {
      console.log(e);
    });
};

const handleCreateNewCourse = async (course, setCreateSuccess) => {
  axios
    .post(`http://localhost:3000/course`, course, { withCredentials: true })
    .then((response) => {
      console.log(response.data);
      setCreateSuccess(true);
    })
    .catch((e) => {
      console.log(e);
      console.log("Fail to create a course!");
    });
};

const handleUpdateCourse = async (values, courseId, setUpdateSuccess) => {
  console.log(values);
  axios.patch(`http://localhost:3000/course/update/${courseId}`, values, {
    withCredentials: true,
  });
  setUpdateSuccess(true);
};

const handleFetchTutorValidCard = async (tutorValid, setTutorValid) => {
  axios
    .get(`http://localhost:3000/admin/register/waiting`, {
      withCredentials: true,
    })
    .then((response) => {
      setTutorValid(response.data);
    })
    .catch((e) => {
      console.log(e);
    });
};

const handleFetchReportCard = async (report, setReport) => {
  await axios
    .get(`http://localhost:3000/admin/report/waiting`, {
      withCredentials: true,
    })
    .then((response) => {
      setReport(response.data);
    })
    .catch((e) => {
      console.log(e);
    });
};

const handleSetTutorValidStatus = async (
  tutorID,
  validStatus,
  push,
  setPush
) => {
  console.log(tutorID);
  axios
    .patch(
      `http://localhost:3000/admin/register/${tutorID}`,
      { status: validStatus },
      {
        withCredentials: true,
      }
    )
    .catch((e) => {
      console.log(e);
    });
  setPush(!push);
};

const handleSetReportStatus = async (reportID, reportStatus, push, setPush) => {
  console.log(reportID);
  axios
    .patch(
      `http://localhost:3000/admin/report/${reportID}`,
      { status: reportStatus },
      {
        withCredentials: true,
      }
    )
    .catch((e) => {
      console.log(e);
    });
  setPush(!push);
};

const handleSubmitReport = async (
  cookieUserId,
  title,
  type,
  detail,
  picture
) => {
  const user = {
    userId: cookieUserId,
    title: title,
    type: type,
    detail: detail,
    picture: picture,
  };
  console.log(user);
  axios
    .post(`http://localhost:3000/report`, user, { withCredentials: true })
    .then((response) => {
      const data = response.data;
      console.log(data);
      alert(
        "Thank you for informing the problems. We, admins, will solve the problem as soon as possible."
      );
    })
    .catch((e) => {
      alert("Error occuring in the process. Please fill in the form again.");
    });
};

const handleFetchEnroll = async (cookie, setEnroll) => {
  let path;
  if (cookie.user_role === "student")
    path = `http://localhost:3000/enroll/student/${cookie.user}`;
  else path = `http://localhost:3000/enroll/waiting/tutor/${cookie.user}`;

  axios
    .get(path, {
      withCredentials: true,
    })
    .then((response) => {
      setEnroll(response.data);
    })
    .catch((e) => {
      console.log(e);
    });
};

const handleApproveEnroll = async (isApproved, enrollId, push, setPush) => {
  if (isApproved) {
    axios.patch(
      `http://localhost:3000/enroll/${enrollId}`,
      { status: "approved" },
      { withCredentials: true }
    );
    setPush(!push);
  } else {
    axios.patch(
      `http://localhost:3000/enroll/${enrollId}`,
      { status: "rejected" },
      { withCredentials: true }
    );
    setPush(!push);
  }
};

const handleUpdateBalance = async (userId, type, setUserData) => {
  if (type === 0) {
    const amountToChange = 1000;
    axios
      .patch(
        `http://localhost:3000/credit/user/balance/${userId}`,
        { amountToChange: amountToChange, type: type },
        { withCredentials: true }
      )
      .then((response) => {
        setUserData({ balance: response.data.balance });
      });
  }
};

const handleFetchPayment = async (cookie, setPayment) => {
  await axios
    .get(`http://localhost:3000/credit/user/history/${cookie.user}`, {
      withCredentials: true,
    })
    .then((response) => {
      setPayment(response.data);
    })
    .catch((e) => {
      console.log(e);
    });
};
const handleShowBalance = async (setUserData, userId) => {
  await axios
    .get(`http://localhost:3000/credit/user/balance/${userId}`, {
      withCredentials: true,
    })
    .then((response) => {
      console.log(response);
      setUserData({
        fullname: response.data.fullname,
        username: response.data.username,
        balance: response.data.balance,
        imgURL: response.data.imgURL,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export {
  handleLogin,
  handleLogout,
  handleGetCourseByID,
  handlePublishCourse,
  handleFetchCourse,
  handleSearchCourse,
  handleCreateNewCourse,
  handleUpdateCourse,
  handleFetchTutorValidCard,
  handleFetchReportCard,
  handleSetTutorValidStatus,
  handleSetReportStatus,
  handleSubmitReport,
  handleFetchEnroll,
  handleApproveEnroll,
  handleUpdateBalance,
  handleFetchPayment,
  handleShowBalance,
};

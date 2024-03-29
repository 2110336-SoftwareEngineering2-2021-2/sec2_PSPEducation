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

  let requestURL = position === "admin" ? adminURL : userURL;

  axios
    .post(requestURL, user, {
      withCredentials: true,
    })
    .then((response) => {
      console.log(response.data);
      setCookie("user", response.data.id);
      let user_role = position === "admin" ? "admin" : response.data.type
      setCookie("user_role", user_role);
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
  await axios
    .get(`http://localhost:3000/course`, {
      withCredentials: true,
    })
    .then((response) => {
      setCourse(response.data);
    })
    .catch((e) => {
      console.log(e);
    });
};

const handleCreateNewCourse = async (course, setCreateSuccess) => {
  await axios
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
  await axios
    .patch(`http://localhost:3000/course/update/${courseId}`, values, {
      withCredentials: true,
    })
    .catch((e) => {
      console.log(e);
    });
  // setUpdateSuccess(true);
};

const handleFetchTutorValidCard = async (tutorValid, setTutorValid) => {
  await axios
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
  await axios
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
  await axios
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
  await axios
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

  await axios
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

const handleStudentCancelEnroll = async (cookie, enrollId, push, setPush) => {
  await axios
    .patch(
      `http://localhost:3000/enroll/cancel/${enrollId}`,
      {},
      {
        withCredentials: true,
      }
    )
    .catch((e) => {
      console.log(e);
    });
  setPush(!push);
};

const handleTutorApproveEnroll = async (
  isApproved,
  enrollId,
  push,
  setPush
) => {
  if (isApproved) {
    axios.patch(
      `http://localhost:3000/enroll/${enrollId}`,
      { status: "approved" },
      { withCredentials: true }
    );
  } else {
    axios.patch(
      `http://localhost:3000/enroll/${enrollId}`,
      { status: "rejected" },
      { withCredentials: true }
    );
  }
  setPush(!push);
};

const handleUpdateBalance = async (userId, type, userData, setUserData) => {
  if (type === 0) {
    const amountToChange = 1000;
    await axios
      .patch(
        `http://localhost:3000/credit/user/balance/${userId}`,
        { amountToChange: amountToChange, type: type },
        { withCredentials: true }
      )
      .then((response) => {
        setUserData({ ...userData, balance: response.data.balance });
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

const handleShowBalance = async (setUserData, userId, push, setPush) => {
  await axios
    .get(`http://localhost:3000/credit/user/balance/${userId}`, {
      withCredentials: true,
    })
    .then((response) => {
      setUserData({
        fullname: response.data.fullname,
        username: response.data.username,
        balance: response.data.balance,
        imgURL: response.data.imgURL[0],
      });
    })
    .catch((err) => {
      console.log(err);
    });
  setPush(!push);
};

const handleGetNotification = async (setNotificationData, userId) => {
  await axios
    .get(`http://localhost:3000/notification/user/${userId}`, {
      withCredentials: true,
    })
    .then((response) => {
      // console.log(response);
      setNotificationData(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const handleReadNotification = async (
  notificationId,
  push,
  setPush
) => {
  await axios
    .patch(
      `http://localhost:3000/notification/${notificationId}`,
      {},
      {
        withCredentials: true,
      }
    )
    .then((response) => {
      // console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
  setPush(!push);
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
  handleTutorApproveEnroll,
  handleStudentCancelEnroll,
  handleUpdateBalance,
  handleFetchPayment,
  handleShowBalance,
  handleGetNotification,
  handleReadNotification,
};

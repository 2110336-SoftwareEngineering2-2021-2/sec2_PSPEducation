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
      console.log(response.data);
    })
    .catch((e) => {
      console.log(e);
    });
};

const handleCreateNewCourse = async (course, setCreateSuccess) => {
  axios
    .post(`http://localhost:3000/course`, course, { withCredentials: true })
    .then((response) => {
      const data = response.data;
      console.log(data);
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

  await axios
    .get(path, {
      withCredentials: true,
    })
    .then((response) => {
      setCourse(response.data);

      const getRowAddInfo = async (eachRow, i) => {
        axios
          .get(`http://localhost:3000/course/${eachRow.courseId}`, {
            withCredentials: true,
          })
          .then((response2) => {
            return Object.assign({}, eachRow, {
              studentName:
                eachRow.studentFirstName + " " + eachRow.studentLastName,
              ...response2.data,
              studentCount: response2.data.students.length,
            });
          })
          .then((tmp) => {
            // setEnroll(prevEnroll => [...prevEnroll, { [i]: tmp } ]);
            setEnroll(Object.assign([], enroll, { [i]: tmp }));
            // console.log(Object.assign([], enroll, [{ [i]: tmp }]));
          });
      };

      for (let i = 0; i < 1; i++) {
        getRowAddInfo(response.data[i], i.toString());
      }
      console.log(enroll);
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
};

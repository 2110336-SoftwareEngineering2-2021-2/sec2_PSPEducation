import axios from "axios";
import { Navigate } from "react-router-dom";
import { sha512_256 } from "js-sha512";

const handleLogin = async (
  email,
  password,
  state,
  setState,
  cookie,
  setCookie
) => {
  // var passwordHash = sha512_256(password);
  const user = { email, password };
  axios
    .post(`http://localhost:3000/auth/signin`, user, {
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

export { handleLogin, handleLogout };

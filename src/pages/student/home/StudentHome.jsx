import "./studentHome.css";
import StudentTopbar from "../../../components/student/topbar/StudentTopbar";
import StudentSidebar from "../../../components/student/sidebar/StudentSidebar";
import * as React from "react";
import { withCookies, Cookies, useCookies } from "react-cookie";

function StudentHome() {
  // removeCookie("name");
  // const [cookies, setCookie, removeCookie] = useCookies(["why"]);
  // setCookie("why", "hello", { path: "/" });

  return (
    <>
      <StudentTopbar />
      <div className="pageContent">
        <div className="sidebarContainer">
          <StudentSidebar />
        </div>

        <div className="homeContainer">
          <div className="homeWrapper">
            <div className="content">
              <div className="card">
                <div className="cardContent">
                  <div className="">studentfeed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default StudentHome;
const mapStateToProps = (state, ownProps) => {
  return {
    state: state,
    cookies: ownProps.cookies,
  };
};
// const handleSubmit = (values, { props = this.props, setSubmitting }) => {
//   //handle form submission
//   ...
//   //set cookie
//   props.cookies.set('name', values.name, { path: '/' });

//   setSubmitting(false);

//   //update state, do something else...
//   props.handleStateFromRedux(Object.assign({}, values));
// }

// export const StudentHomeContainer = connect(mapStateToProps, null)(StudentHome);
// export default StudentHomeContainer;

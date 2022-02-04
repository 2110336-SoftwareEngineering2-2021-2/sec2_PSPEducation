import { React } from "react";
import "./myCourse.css";
import { myCourseData } from "../../../../dummyData";
import { PeopleAltSharp } from "@mui/icons-material";

export const MyCourses = () => {
  return (
    <div className="myCourseList">
      {myCourseData.map((data, key) => {
        return (
          <Course
            key={key}
            course_name={data.course_name}
            status={data.status}
            registered_num={data.registered_num}
            max_capacity={data.max_capacity}
          />
        );
      })}
    </div>
  );
};

const Course = ({ course_name, status, registered_num, max_capacity }) => {
  if (!course_name) return <div />;
  return (
    <div className="myCourseListItem">
      <span className="courseName">{course_name}</span>
      <span className="courseStatus">{status}</span>
      <span className="courseStudentNum">{registered_num}</span>
      <span className="courseMaxCap">{max_capacity}</span>
      <PeopleAltSharp className="coursePeopleIcon" />
    </div>
  );
};

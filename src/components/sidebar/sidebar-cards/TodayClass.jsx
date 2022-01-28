import { React } from "react";
import "./todayClass.css";
import { classData } from "../../../dummyData";

export const TodayClass = () => {
  return (
    <ul className="todayClassList">
      {classData.map((data, key) => {
        return (
          <Class
            key={key}
            subject={data.subject}
            time={data.time}
            location={data.location}
          />
        );
      })}
    </ul>
  );
};

const Class = ({ subject, location, time }) => {
  if (!subject) return <div />;
  return (
    <li className="todayClassListItem">
      <span className="classTime">{time}</span>
      <span className="classSubject">{subject}</span>
      <span className="classLocation">{location}</span>
    </li>
  );
};

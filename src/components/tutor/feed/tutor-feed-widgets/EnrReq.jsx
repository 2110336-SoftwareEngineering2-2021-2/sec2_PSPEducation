import React from "react";
import "./enrReq.css";
import { apptData } from "../../../../dummyData";

export const EnrReq = () => {
  return (
    <div className="appointmentList">
      {apptData.map((data, key) => {
        return (
          <Enr
            key={key}
            fullname={data.fullname}
            username={data.username}
            day={data.day}
            date={data.date}
            time={data.time}
            location={data.location}
            imgURL={data.imgURL}
          />
        );
      })}
    </div>
  );
};

const Enr = ({ fullname, username, day, date, time, location, imgURL }) => {
  if (!fullname) return <div />;
  return (
    <div className="appointmentCard">
      <img src={imgURL} alt="" className="appointmentAvatar" />
      <div className="appointmentInfo">
        <div className="appointmentTitle">
          <div className="appointmentFullname">{fullname}</div>
          <div className="appointmentUsername">{username}</div>
        </div>
        <div className="appointmentDetail">
          <div className="appointmentDeatilWrapper">
            <div className="appointmentDetailUpper">
              <div className="appointmentDay">{day}</div>
              <div className="appointmentDate">{date}</div>
            </div>
            <div className="appointmentDetailLower">
              <div className="appointmentTime">{time}</div>
              <div className="appointmentLocation">{location}</div>
            </div>
          </div>
          {/* <div className="appointmentEarns">$105</div> */}
        </div>
      </div>
    </div>
  );
};

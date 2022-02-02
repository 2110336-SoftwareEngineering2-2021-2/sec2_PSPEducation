import React from "react";
import "./userReportCard.css";
// import { StarRounded, StarOutlineRounded } from "@mui/icons-material";

export default function UserReportCard() {
  const imgSrc = "https://source.unsplash.com/random/300×300/?face";
  return (
    <div className="card">
      <div className="cardContent">
        <div className="cardImageContainer">
          <img src={imgSrc} alt="" className="cardImageAvatar" />
        </div>
        <div className="tutorName">
          <span className="fullName">Tutor Name1</span>
          <span className="profession">SE II</span>
        </div>

        <div className="cardButton">
          <button className="cardButtonView">view</button>
          <button className="cardButtonRemove">remove</button>
        </div>
      </div>
    </div>
  );
}

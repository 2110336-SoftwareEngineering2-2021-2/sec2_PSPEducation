import React from "react";
import "./feed.css";
import TutorValidationCard from "./card/tutorValidation/TutorValidationCard";
import UserReportCard from "./card/userReport/UserReportCard";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <UserReportCard />
        <TutorValidationCard />
        <UserReportCard />
        <UserReportCard />
        <TutorValidationCard />
        <TutorValidationCard />
      </div>
    </div>
  );
}

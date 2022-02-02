import "./userReportCard.css";
// import { StarRounded, StarOutlineRounded } from "@mui/icons-material";

export default function UserReportCard() {
  const imgSrc = "https://source.unsplash.com/random/300×300/?report";
  return (
    <div className="userReportCard">
      <div className="userReportCardContent">
        <div className="userReportCardImageContainer">
          <img src={imgSrc} alt="" className="userReportCardImageAttached" />
        </div>
        <div className="userReportCardReportInfo">
          <span className="userReportCardHeader">Report Topic1</span>
          <span className="userReportCardDetail">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
            voluptatibus sed corrupti laborum quasi? Delectus aut, dolorum
            voluptatum quod quae impedit neque culpa deleniti, commodi, fugit
            doloribus ut iste nulla.
          </span>
        </div>

        <div className="userReportCardButton">
          <button className="userReportCardButtonView">add</button>
          <button className="userReportCardButtonRemove">dismiss</button>
        </div>
      </div>
    </div>
  );
}

import "../tutorValidationCard.css";
// import { StarRounded, StarOutlineRounded } from "@mui/icons-material";

export default function TutorValidationCard() {
  const imgAvatarSrc = "https://source.unsplash.com/random/300×300/?face";
  const imgBgTutorSrc = "https://source.unsplash.com/random/300×300/?learn";

  var root = document.querySelector(":root");
  root.style.setProperty("--imgBgTutorValid", "url(" + imgBgTutorSrc + ")");

  return (
    <div className="tutorValidCard">
      <div className="tutorValidCardContent">
        <div className="tutorValidCardImageContainer">
          <img
            src={imgAvatarSrc}
            alt=""
            className="tutorValidCardImageAvatar"
          />
        </div>
        <div className="tutorName">
          <span className="tutorFullName">Tutor Name1</span>
          <span className="tutorProfession">SE II</span>
        </div>

        <div className="tutorValidCardButton">
          <button className="tutorValidCardButtonView">view</button>
          <button className="tutorValidCardButtonRemove">remove</button>
        </div>
      </div>
    </div>
  );
}

import "./tutorValidationCard.css";

var APIHandler = require("../../../simple/api/APIHandler");

export default function TutorValidationCard(props) {
  if (!props.firstname) return <div />;

  const imgAvatarSrc = props.imgAvatarURL;
  const imgBgTutorSrc = props.imgBgURL;

  const imgBgStyle = {
    margin: "5px",
    height: "337px",
    position: "relative",
    background:
      "linear-gradient(" +
      "rgb(" +
      "102, 101, 101" +
      ")," +
      "transparent," +
      "rgb(" +
      "47, 47, 47" +
      "))," +
      "url(" +
      imgBgTutorSrc +
      ")",
    backgroundSize: "cover",
    borderRadius: "20px",
  };

  return (
    <div className="tutorValidCard" style={imgBgStyle}>
      <div className="tutorValidCardContent">
        <div className="tutorValidCardImageContainer">
          <img
            src={imgAvatarSrc}
            alt=""
            className="tutorValidCardImageAvatar"
          />
        </div>
        <div className="tutorName">
          <span className="tutorFullName">
            {props.firstname} {props.lastname}
          </span>
          <span className="tutorUserName">{props.username}</span>
          <span className="tutorProfession">{props.profession}</span>
        </div>

        <div className="tutorValidCardButton">
          <button
            className="tutorValidCardButtonView"
            onClick={() => {
              props.setTriggerView(true);
              props.setTriggerData({
                firstname: props.firstname,
                lastname: props.lastname,
                username: props.username,
                email: props.email,
                phoneNumber: props.phoneNumber,
                displayNumber: props.displayNumber,
                birthdate: props.birthdate,
                gender: props.gender,
                educationLevel: props.educationLevel,
                citizenId: props.citizenId,
                citizenImage: props.citizenImage,
                profession: props.profession,
                imgAvatarURL: props.imgAvatarURL,
                imgBgURL: props.imgBgURL,
              });
            }}
          >
            view
          </button>

          <button
            className="tutorValidCardButtonRemove"
            onClick={() => {
              APIHandler.handleSetTutorValidStatus(
                props.userId,
                "rejected",
                props.push,
                props.setPush
              );
            }}
          >
            remove
          </button>
        </div>
      </div>
    </div>
  );
}

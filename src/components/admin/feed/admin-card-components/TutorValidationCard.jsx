import "./tutorValidationCard.css";

export default function TutorValidationCard(props) {
  if (!props.fullname) return <div />;

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
    "background-size": "cover",
    "border-radius": "20px",
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
          <span className="tutorFullName">{props.fullname}</span>
          <span className="tutorUserName">{props.username}</span>
          <span className="tutorProfession">{props.profession}</span>
        </div>

        <div className="tutorValidCardButton">
          <button
            className="tutorValidCardButtonView"
            onClick={() => {
              props.setTriggerView(true);
              props.setTriggerData({
                key: props.key,
                fullname: props.fullname,
                username: props.username,
                profession: props.profession,
                imgAvatarURL: props.imgAvatarURL,
                imgBgURL: props.imgBgURL,
              });
            }}
          >
            view
          </button>

          <button className="tutorValidCardButtonRemove">remove</button>
        </div>
      </div>
    </div>
  );
}

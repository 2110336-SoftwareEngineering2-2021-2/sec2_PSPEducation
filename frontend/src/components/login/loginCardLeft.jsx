import React from "react";
import PspImgSrc from "../../PSP-logo.png";
import "./loginCardLeft.css";
import { developerCardData } from "../../dummyData";

export default function LoginCardLeft() {
  return (
    <div className="left">
      <div className="leftPSP">
        <img src={PspImgSrc} alt="" className="leftPSPLogo" />
      </div>
      <div className="leftTeamDevelop">
        <div className="leftTeamDevelopTitle">Team Developers</div>
        <div className="leftDeveloperList">
          {developerCardData.map((data, key) => {
            return (
              <DeveloperCard
                key={key}
                devName={data.devName}
                imgAvatarURL={data.imgAvatarURL}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function DeveloperCard(props) {
  if (!props.devName) return <div />;
  return (
    <div className="leftDeveloperItem">
      <img src={props.imgAvatarURL} alt="" className="leftDevItemAvatar" />
      <div className="leftDevItemName">{props.devName}</div>
    </div>
  );
}

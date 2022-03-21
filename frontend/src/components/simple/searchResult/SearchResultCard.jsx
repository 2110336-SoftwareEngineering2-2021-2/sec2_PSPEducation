import React from "react";
import "./searchResultCard.css";
import { CloseOutlined, AddCircle } from "@mui/icons-material";
import axios from "axios";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";

var APIHandler = require("../api/APIHandler");

export default function SearchResultCard({
  title,
  username,
  detail,
  imgTopicURL,
  imgBgURL,
  reportID,
  push,
  setPush,
}) {
  if (!title) return <div />;

  const imgTopicSrc = imgTopicURL;
  const imgBgSrc = imgBgURL;

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
      imgBgSrc +
      ")",
    backgroundSize: "cover",
    borderRadius: "20px",
  };

  return (
    <div className="userReportCard" style={imgBgStyle}>
      <div className="userReportCardContent">
        <div className="userReportCardImageContainer">
          <img
            src={imgTopicSrc}
            alt=""
            className="userReportCardImageAttached"
          />
        </div>
        <div className="userReportCardReportInfo">
          <span className="userReportCardTitle">{title}</span>
          <span className="userReportCardUserName">{username}</span>
          <span className="userReportCardDetail">{detail}</span>
        </div>

        <div className="userReportCardButton">
          <button
            className="userReportCardButtonDone"
            onClick={() => {
              APIHandler.handleSetReportStatus(
                reportID,
                "solved",
                push,
                setPush
              );
            }}
          >
            done
          </button>
          <button
            className="userReportCardButtonRemove"
            onClick={() => {
              APIHandler.handleSetReportStatus(
                reportID,
                "dismissed",
                push,
                setPush
              );
            }}
          >
            dismiss
          </button>
        </div>
      </div>
    </div>
  );
}

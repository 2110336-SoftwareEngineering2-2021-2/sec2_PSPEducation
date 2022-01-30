import React from "react";
import "./feed.css";
import Card from "./card/Card";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

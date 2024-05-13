import React from "react";
import "./Empty.css";
import logo from "../../assets/images/logo.png";

const Empty = ({ text }) => {
  return (
    <div className="empty">
      <h2>{text}</h2>

      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/008/249/822/original/a-white-robot-searching-for-a-404-error-with-a-torch-light-4k-animation-404-page-not-found-error-concept-with-a-robot-4k-footage-system-finding-404-error-with-a-big-torch-light-animated-free-video.jpg"
        alt=""
      />
    </div>
  );
};

export default Empty;

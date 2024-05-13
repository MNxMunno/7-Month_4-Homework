import React from "react";
import "./Empty.css";
import logo from "../../assets/images/logo.png";

const Empty = ({ text }) => {
  return (
    <div className="empty">
      <h2>{text}</h2>
      <p>Lorem ipsum dolor sit.</p>
      <img src={logo} alt="" />
    </div>
  );
};

export default Empty;

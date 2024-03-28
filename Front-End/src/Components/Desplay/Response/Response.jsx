// Response.jsx

import React from "react";
import img from "../../../assets/ai.png";
import "./Response.css";

function Response({ responseData }) {
  return (
    <div className="Response">
      <div className="responseHeader">
        <img className="botimg" src={img} alt="Chat Bot" />
        <p>Chat Bot</p>
      </div>
      <p className="responsedata">{responseData}</p>
    </div>
  );
}

export default Response;

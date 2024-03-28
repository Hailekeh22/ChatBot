import React from "react";
import "./Prompt.css";
import usericon from "../../../assets/usericon.png";

function Prompt({ promptValue }) {
  return (
    <div className="prompttxt">
      <div className="promptheader">
        <img className="usericon" src={usericon} alt="user icon" />
        <p>You</p>
      </div>
      <p className="userprompt">{promptValue}</p>
    </div>
  );
}

export default Prompt;

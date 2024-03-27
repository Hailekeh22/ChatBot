import React from "react";
import "./Prompt.css";
import usericon from "../../../assets/usericon.png";

function Prompt() {
  return (
    <div className="prompttxt">
      <div className="promptheader">
        <img className="usericon" src={usericon}></img>
        <p>You</p>
      </div>
      <p className="userprompt">How to make a sandwich </p>
    </div>
  );
}

export default Prompt;

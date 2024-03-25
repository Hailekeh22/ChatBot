import React from "react";
import "./display.css";
import Prompt from "./Prompt/Prompt";

function Display() {
  return (
    <div className="displaycontainer">
      <div className="displaysection">
        <Prompt />
      </div>
    </div>
  );
}

export default Display;

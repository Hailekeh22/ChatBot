import React from "react";
import "./display.css";
import Prompt from "./Prompt/Prompt";
import Response from "./Response/Response";

function Display() {
  return (
    <div className="displaycontainer">
      <div className="displaysection">
        <Prompt />
        <Response />
      </div>
    </div>
  );
}

export default Display;

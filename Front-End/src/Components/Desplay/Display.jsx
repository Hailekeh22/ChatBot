import React from "react";
import "./display.css";
import Prompt from "./Prompt/Prompt";
import Response from "./Response/Response";

function Display({ inputValuesArray }) {
  return (
    <div className="displaycontainer">
      <div className="displaysection">
        {inputValuesArray.map((value, index) => (
          <Prompt key={index} promptValue={value} />
        ))}
        <Response />
      </div>
    </div>
  );
}

export default Display;

import React from "react";
import "./display.css";
import Prompt from "./Prompt/Prompt";
import Response from "./Response/Response";

function Display(props) {
  const chatItems = [];
  const maxLength = Math.max(
    props.inputValuesArray.length,
    props.responsesArray.length
  );
  for (let i = 0; i < maxLength; i++) {
    if (props.inputValuesArray[i]) {
      chatItems.push(
        <Prompt key={`prompt-${i}`} promptValue={props.inputValuesArray[i]} />
      );
    }
    if (props.responsesArray[i]) {
      chatItems.push(
        <Response
          key={`response-${i}`}
          responseData={props.responsesArray[i]}
        />
      );
    }
  }

  return (
    <div className="displaycontainer">
      <div className="displaysection">{chatItems}</div>
    </div>
  );
}

export default Display;

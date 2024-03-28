// Input.jsx

import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import "./Input.css";

function Input(props) {
  return (
    <div>
      <div className="textbox">
        <div className="chatbox">
          <input
            className="textinput"
            placeholder="Ask Gpt"
            type="text"
            value={props.inputValue}
            onChange={(e) => props.onInputChange(e.target.value)}
          ></input>
          <button className="askbtn" onClick={props.getMessage}>
            <FaPaperPlane className="sendicon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Input;

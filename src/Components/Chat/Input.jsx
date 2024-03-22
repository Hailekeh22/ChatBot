import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import "./Input.css";

function Input() {
  return (
    <div>
      <div className="textbox">
        <div className="chatbox">
          <input
            className="textinput"
            placeholder="Ask Gpt"
            type="text"
          ></input>
          <button className="askbtn">
            <FaPaperPlane className="sendicon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Input;

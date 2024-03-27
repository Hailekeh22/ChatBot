import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import "./Input.css";

function Input() {
  const [inputValue, setInputValue] = useState("");

  const getmessage = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: inputValue,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(
        "http://localhost:3030/completions",
        options
      );
      setInputValue("");
      const data = await response.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div className="textbox">
        <div className="chatbox">
          <input
            className="textinput"
            placeholder="Ask Gpt"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          ></input>
          <button className="askbtn" onClick={getmessage}>
            <FaPaperPlane className="sendicon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Input;

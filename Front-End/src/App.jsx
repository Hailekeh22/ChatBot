import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Input from "./Components/Chat/Input";
import Display from "./Components/Desplay/Display";
import { getMessage } from "./Services/APIService.js";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [inputValuesArray, setInputValuesArray] = useState([]);
  const [responsesArray, setResponsesArray] = useState([]);

  const handleGetMessage = async () => {
    await getMessage(
      inputValue,
      setResponsesArray,
      responsesArray,
      setInputValuesArray,
      inputValuesArray,
      setInputValue
    );
  };

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  return (
    <>
      <Header />
      <Display
        inputValuesArray={inputValuesArray}
        responsesArray={responsesArray}
      />
      <Input
        inputValue={inputValue}
        onInputChange={handleInputChange}
        getMessage={handleGetMessage}
      />
    </>
  );
}

export default App;

// App.jsx

import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Input from "./Components/Chat/Input";
import Display from "./Components/Desplay/Display";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [inputValuesArray, setInputValuesArray] = useState([]);

  const getMessage = async () => {
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
      setInputValuesArray([...inputValuesArray, inputValue]);
      setInputValue("");
      const data = await response.json();
      console.log(data);
      console.log(inputValuesArray);
    } catch (e) {
      console.log(e);
    }
  };

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  return (
    <>
      <Header />
      <Display inputValuesArray={inputValuesArray} />
      <Input
        inputValue={inputValue}
        onInputChange={handleInputChange}
        getMessage={getMessage}
      />
    </>
  );
}

export default App;

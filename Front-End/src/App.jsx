import React, { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import Input from "./Components/Chat/Input";
import Display from "./Components/Desplay/Display";
import { getMessage } from "./Services/APIService.js";
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './toast.css'




function App() {
  const [inputValue, setInputValue] = useState("");
  const [inputValuesArray, setInputValuesArray] = useState([]);
  const [responsesArray, setResponsesArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const showToastMessage = () => {
    toast.info('The back-end is deployed on a free service. The first request takes 30-50 seconds.', {
      position: "top-right",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Slide,
      });
  };

  useEffect(() => {
    showToastMessage();
  }, [])


  const handleGetMessage = async () => {

    setInputValuesArray((prevArray) => [...prevArray, inputValue]);
    setInputValue("");

    setIsLoading(true);
    await getMessage(
      inputValue,
      setResponsesArray,
      responsesArray,
      inputValuesArray,
    );

    setIsLoading(false)
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
        isLoading={isLoading}
      />
      <ToastContainer
          className="toastPosition"
          position="top-right"
          autoClose={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          theme="colored"
      />
    </>
  );
}

export default App;

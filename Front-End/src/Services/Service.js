export const getMessage = async (
  inputValue,
  setResponsesArray,
  responsesArray,
  setInputValuesArray,
  inputValuesArray,
  setInputValue
) => {
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
    const response = await fetch("http://localhost:3030/chat", options);
    const data = await response.json();
    const responcevalue = data.response.candidates[0].content.parts[0].text;

    setResponsesArray([...responsesArray, responcevalue]);
    setInputValuesArray([...inputValuesArray, inputValue]);
    setInputValue("");
    console.log(data);
    console.log(inputValuesArray);
  } catch (e) {
    console.log(e);
  }
};

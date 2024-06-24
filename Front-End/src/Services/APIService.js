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
    const responseevalue = data.response.candidates[0].content.parts[0].text;

    setResponsesArray([...responsesArray, responseevalue]);
    setInputValuesArray([...inputValuesArray, inputValue]);
    setInputValue("");
    console.log(data);
    console.log(inputValuesArray);
  } catch (e) {
    console.log(e);
  }
};

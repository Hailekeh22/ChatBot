export const getMessage = async (
  inputValue,
  setResponsesArray,
  responsesArray,
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
    const response = await fetch(
      "https://chatbot-backend-w3qa.onrender.com/chat",
      options
    );
    const data = await response.json();
    const responseevalue = data.response.candidates[0].content.parts[0].text;

    setResponsesArray([...responsesArray, responseevalue]);
  
  } catch (e) {
    console.log(e);
  }
};

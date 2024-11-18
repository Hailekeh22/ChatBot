export const getMessage = async (
  inputValue,
  setResponsesArray,
  responsesArray,
  inputValuesArray,
  setInputValuesArray
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

    if(data.error){
      alert(`can not fetch content from gemini-1.5-flash-latest \n The model is overloaded. Please try again later.`);
      setResponsesArray([]);
      setInputValuesArray([]);
      console.log("inputValuesArray after clearing:", inputValuesArray);
      return 0;

    } 

    const responseevalue = data.response.candidates[0].content.parts[0].text;
    setResponsesArray([...responsesArray, responseevalue]);
  
  } catch (e) {
    console.log(e);
  }
};

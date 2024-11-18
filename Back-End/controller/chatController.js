import { model } from "../App.js";

export const chatController = async (req, res) => {
  try {
    const prompttxt = req.body.message;
    const result = await model.generateContent(prompttxt);
  
    res.send(result);
  } catch (e) {
    res.send({error: true})
  }
};

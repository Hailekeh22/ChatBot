import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

app.use(express.json());

const api_key = process.env.NEWAPI_KEY;

const genai = new GoogleGenerativeAI(api_key);

const model = genai.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

app.post("/chat", async (req, res) => {
  const prompttxt = req.body.message;
  const result = await model.generateContent(prompttxt);

  res.send(result);
});

const port = 3030;
app.listen(port, () => {
  console.log(`Your server is running on port ${port}`);
});

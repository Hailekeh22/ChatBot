import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { api_key } from "./constants.js";
import { promptRoute } from "./routes/promptRoute.js";

export const genai = new GoogleGenerativeAI(api_key);
export const model = genai.getGenerativeModel({
  model: "gemini-1.5-flash-latest",
});

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(promptRoute);

export default app;

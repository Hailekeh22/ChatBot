import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { api_key } from "./constants.js";
import { promptRoute } from "./routes/promptRoute.js";

export const genai = new GoogleGenerativeAI(api_key);
export const model = genai.getGenerativeModel({
  model: "gemini-2.0-flash",
});

const app = express();
const corsOption = {
  origin: "https://chat-bot-woad-two.vercel.app",
  methods: "GET,POST",
};

app.use(bodyParser.json());
app.use(cors(corsOption));
app.use(express.json());
app.use(promptRoute);

export default app;

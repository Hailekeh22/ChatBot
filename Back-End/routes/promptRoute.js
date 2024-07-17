import express from "express";
import { chatController } from "../controller/chatController.js";

export const promptRoute = express.Router();

promptRoute.post("/chat", chatController);

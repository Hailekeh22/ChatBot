const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const app = express();

require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use("/", (req, res) => {
  res.send("Server is running");
});

app.post("/completions", async (req, res) => {
  const API_KEY = process.env.API_KEY;

  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: req.body.message }],
      max_tokens: 100,
    }),
  };

  try {
    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      options
    );
    const data = await response.json();
    res.send(data);
  } catch (e) {
    console.log(e);
    res.status(500).send("Error processing request");
  }
});

const port = 3030;
app.listen(port, () => {
  console.log(`Your server is running on port ${port}`);
});

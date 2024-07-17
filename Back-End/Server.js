import app from "./App.js";
import { serverPort } from "./constants.js";

app.listen(serverPort, () => {
  console.log(`Server is running on port: ${serverPort}`);
});

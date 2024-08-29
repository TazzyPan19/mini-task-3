const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
  
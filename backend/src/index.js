const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Workout Tracker API running");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

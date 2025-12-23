const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const app = express();

const coreOptions = {
  origin: ["http://localhost:5173"],
};
app.use(cors(coreOptions));

const PORT = process.env.PORT || 5000;

// app.get("/", (req, res) => {
//   res.send("Node js Server is running...");
// });

// app.get("/about", (req, res) => {
//   res.send("This is the about page of the Node js server.");
// });

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

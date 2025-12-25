const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./Middlewares/errorMiddleware");

connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.use("/api/user", userRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`.yellow.bold);
});

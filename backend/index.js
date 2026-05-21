const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const publicRoute = require("./routes/publicRoute");
dotenv.config();

// database
mongoose
  .connect(process.env.DB)
  .then(() => console.log("DB connected."))
  .catch(() => console.log("DB connected failed."));

// config
const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/", publicRoute);

// server
app.listen(process.env.PORT, () => console.log("Server running ..."));

const express = require("express");
const cors = require('cors')
const app = express();


if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

//Using Middleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//import Routes
const catRoutes = require("./routes/cat");

app.use("/api/v1", catRoutes);
// app.use("/api/v1", userRoutes);

module.exports = app;

// index.js

// Required external modules
const express = require("express");
const path = require("path");
const { Sequelize, Model, DataTypes } = require("sequelize");
const Users = require("./models/Users");
const Quizes = require("./models/Quizes");
const { sequelize } = require("./PostgresSetUp");

// ------------------------------------------------------

// App variables
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json({ extended: false })); // It accepts JSON data into our API

// ------------------------------------------------------

// App configuration
// Connect to Postgres

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
connectDB();
// ------------------------------------------------------

// Routes Definition

// app.get("/", (req, res) => {
//   res.status(200).send("You are awesome");
// });

app.post("/auth/register");

// Server activation
app.listen(port, () => {
  console.log(`Listening to requests on PORT ${port}....`);
});

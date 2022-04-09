const express = require("express");
const app = express();
const PORT = 3000;
const { checkConnection, initTables } = require("./connectDB");
const auth = require("./routes/auth");
const questions = require("./routes/questions");

app.use(express.json());

// Check connection to the db
checkConnection();

initTables();

// Express app
// Using middleware
app.use("/auth", auth);

app.use("/questions", questions);

app.get("/", (req, res) => {
  res.send("The server is running......");
});

app.listen(PORT, () => console.log(`The server is running on ${PORT}`));

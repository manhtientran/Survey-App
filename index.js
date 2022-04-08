const express = require("express");
const app = express();
const PORT = 3000;
const { checkConnection } = require("./postgres_set_up/connectDB");

// Check connection to the db
checkConnection();

// Express app
app.get("/", (req, res) => {
  res.send("The server is running......");
});

app.listen(PORT, () => console.log(`The server is running on ${PORT}`));

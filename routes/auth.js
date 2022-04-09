const express = require("express");
const router = express.Router();
const hash = require("object-hash");
const { sequelize } = require("../connectDB");

router.post("/register", async (req, res) => {
  const { email, password } = req.body;
  const token = hash({ email, password });
  const role = "user";
  const surveyResult = null;

  const existEmail = await sequelize.query(
    `SELECT * FROM Users WHERE email='${email}'`
  );
  if (existEmail.length > 0) {
    return res.status(400).json({ message: "Email is in used" });
  }

  try {
    await sequelize.query(
      `INSERT INTO Users(email, password, token, role, surveyResult) VALUES ('${email}', '${password}', '${token}', '${role}', '${surveyResult}')`
    );
    console.log(`Successfully create user`);
  } catch (error) {
    console.error(error);
  }

  res.status(201).json({ email, password, token, role, surveyResult });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const [[user]] = await sequelize.query(
    `SELECT * FROM Users WHERE email = '${email}'`
  );

  if (user === undefined) {
    return res.status(400).json({ message: "User not found" });
  }

  // console.log(user);
  if (password === user.password) {
    res.status(200).json({
      email: user.email,
      password: user.password,
      token: user.token,
      role: user.role,
      surveyResult: user.surveyResult,
    });
  } else {
    res.status(401).json({
      message: "Wrong password",
    });
  }
});

router.post("/logout", async (req, res) => {
  const { token } = req.body;

  const [user] = await sequelize.query(
    `SELECT email FROM Users WHERE token ='${token}'`
  );

  if (user.length === 0) {
    return res.status(404).json({ message: "Not found" });
  }
  res.status(200).json({ message: "Log out success" });
});

router.post("/submitSurvey", async (req, res) => {
  const { surveyResult, token } = req.body;
  const [result] = await sequelize.query(
    `UPDATE Users SET surveyResult = '${surveyResult}' WHERE token='${token}'`
  );
});

module.exports = router;

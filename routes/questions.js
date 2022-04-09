const express = require("express");
const router = express.Router();
const { sequelize } = require("../connectDB");

router.post("/", async (req, res) => {
  const { question, answers, trueAnswer } = req.body;

  try {
    const [result, metadata] = await sequelize.query(
      `INSERT INTO Questions (question, trueAnswer) VALUES ('${question}', '${trueAnswer}') RETURNING questionId;`
    );

    const [{ questionid }] = result;

    // console.log(result);
    // console.log(questionid);

    for (let i = 0; i < answers.length; i++) {
      await sequelize.query(
        `INSERT INTO Answers (questionId, answerContent) VALUES (${questionid}, '${answers[i]}')`
      );
    }
  } catch (error) {
    console.error(error);
  }

  //   console.log(result);

  res.status(201).json({ question, answers, trueAnswer });
});

router.get("/", async (req, res) => {
  try {
    const [result] = await sequelize.query(`SELECT * FROM Questions`);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const [result] = await sequelize.query(
      `SELECT * FROM Questions WHERE questionId = '${id}'`
    );
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;

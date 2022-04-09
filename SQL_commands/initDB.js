const initDB = `
CREATE TABLE IF NOT EXISTS Users (
   userId SERIAL PRIMARY KEY,
   email VARCHAR(255) UNIQUE NOT NULL,
   password VARCHAR(255) NOT NULL,
   role VARCHAR(255) NOT NULL,
   token VARCHAR(255) NOT NULL,
   surveyResult VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS  Questions (
   questionId SERIAL PRIMARY KEY,
   question VARCHAR(255) NOT NULL,
   trueAnswer VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS SurveyRecords (
   surveyRecordId SERIAL PRIMARY KEY,
   userId SERIAL NOT NULL,
   questionId SERIAL NOT NULL,
   userAnswer VARCHAR(255) NOT NULL,

   FOREIGN KEY (userID) REFERENCES Users(userId),
   FOREIGN KEY (questionId) REFERENCES Questions(questionId)

);

CREATE TABLE IF NOT EXISTS  Answers (
   answerId SERIAL PRIMARY KEY,
   questionId SERIAL NOT NULL,
   answerContent VARCHAR(255) NOT NULL,

   FOREIGN KEY (questionId) REFERENCES Questions(questionId)
);`;

module.exports = { initDB };

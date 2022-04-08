const { Sequelize, Model, DataTypes } = require("sequelize");

const host = "localhost";
const port = "5432";

const database = "surveyapp";
const user = "postgres";
const password = "trust";

const sequelize = new Sequelize(database, user, password, {
  host,
  port,
  dialect: "postgres",
  logging: false,
});

const checkConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("DB connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

// checkConnection();

module.exports = { checkConnection, sequelize };

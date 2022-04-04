const { Sequelize } = require("sequelize");

const host = "localhost";
const database_port = "5432";
const database = "survey_app";

const user = "postgres";
const password = "123456";
const sequelize = new Sequelize(database, user, password, {
  host,
  database_port,
  dialect: "postgres",
  logging: false,
});

module.exports = { sequelize };

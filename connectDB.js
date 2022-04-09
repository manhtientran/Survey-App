const { Sequelize, Model, DataTypes } = require("sequelize");
const { initDB } = require("./SQL_commands/initDB");

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

const initTables = async () => {
  try {
    await sequelize.query(initDB);
    console.log("Successfully initialize tables");

    const [results, metadata] = await sequelize.query(
      `SELECT "table_name" FROM information_schema.tables WHERE table_schema = 'public';`
    );
    console.log("ALL TABLES: ", results);
  } catch (error) {
    console.error(error);
  }
};

module.exports = { checkConnection, sequelize, initTables };

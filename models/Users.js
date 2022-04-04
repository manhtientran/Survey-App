const { Sequelize, Model, DataTypes } = require("sequelize");
const { sequelize } = require("../PostgresSetUp");

class Users extends Model {}

Users.init(
  {
    email: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    quiz_result: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "users",
    timestamps: true,
  }
);

module.exports = Users;

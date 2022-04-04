const { Sequelize, Model, DataTypes } = require("sequelize");
const { sequelize } = require("../PostgresSetUp");
class Quizes extends Model {}

Quizes.init(
  {
    question: {
      type: DataTypes.STRING,
    },
    answer: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "users",
    timestamps: true,
  }
);

module.exports = Quizes;

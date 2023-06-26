const { Model, DataTypes } = require("sequelize");
const db = require("../db.js");

const Vote = db.sequelize.define(
  "Vote",
  {
    like: DataTypes.INTEGER,
    dislike: DataTypes.INTEGER,
  },
  {
    timestamps: false,
  }
);

module.exports = Vote;

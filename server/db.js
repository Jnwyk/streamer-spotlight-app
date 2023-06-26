const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.db",
});

const db = {};
db.sequelize = sequelize;

module.exports = db;

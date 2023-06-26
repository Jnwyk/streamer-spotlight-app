const { Model, DataTypes } = require("sequelize");
const db = require("../db.js");
const Vote = require("./vote.js");

const Streamer = db.sequelize.define(
  "Streamer",
  {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    streamingPlatform: DataTypes.ENUM([
      "twitch",
      "youtube",
      "tiktok",
      "kick",
      "rumble",
    ]),
    description: DataTypes.STRING,
  },
  {
    timestamps: false,
  }
);

Streamer.hasOne(Vote);
Vote.belongsTo(Streamer);

module.exports = Streamer;

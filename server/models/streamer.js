const { Model, DataTypes } = require("sequelize");
const db = require("../db.js");
const Vote = require("./vote.js");

const Streamer = db.sequelize.define(
  "Streamer",
  {
    name: DataTypes.STRING,
    streamingPlatform: DataTypes.ENUM([
      "Twitch",
      "YouTube",
      "TikTok",
      "Kick",
      "Rumble",
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

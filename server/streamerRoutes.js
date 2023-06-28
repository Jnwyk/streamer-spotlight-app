const { Router } = require("express");
const Streamer = require("./models/streamer.js");
const Vote = require("./models/vote.js");

const create = async (req, res) => {
  const streamer = await Streamer.create(
    { ...req.body, Vote: { like: 0, dislike: 0 } },
    { include: [Vote] }
  );
  return res.status(201).json({ streamer: streamer });
};

const getAll = async (req, res) => {
  const streamers = await Streamer.findAll({
    include: { model: Vote },
  });
  res.status(200).json({ streamers: streamers });
};

const getOne = async (req, res) => {
  const streamer = await Streamer.findByPk(req.params.streamerId, {
    include: { model: Vote },
  });
  res.status(200).json({ streamer: streamer });
};

const update = async (req, res) => {
  const vote = await Vote.update(req.body, {
    where: { StreamerId: req.params.streamerId },
  });
  res.status(200).json({ vote: vote });
};

module.exports = Router()
  .post("/", create)
  .get("/", getAll)
  .get("/:streamerId", getOne)
  .put("/:streamerId/vote", update);

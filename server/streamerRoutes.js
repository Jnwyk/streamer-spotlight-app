const { Router } = require("express");
const Streamer = require("./models/streamer.js");
const Vote = require("./models/vote.js");

const create = async (req, res) => {
  try {
    const streamer = await Streamer.create(
      { ...req.body, Vote: { like: 0, dislike: 0 } },
      { include: [Vote] }
    );
    return res.status(201).json({ streamer: streamer });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const getAll = async (req, res) => {
  const streamers = await Streamer.findAll({
    include: { model: Vote },
  });
  res.status(200).json({ streamers: streamers });
};

const getOne = async (req, res) => {
  try {
    const streamer = await Streamer.findByPk(req.params.streamerId, {
      include: { model: Vote },
    });

    if (!streamer) {
      console.log("========================== TEST ==========================");
      res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ streamer: streamer });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const update = async (req, res) => {
  try {
    const vote = await Vote.update(req.body, {
      where: { StreamerId: req.params.streamerId },
    });
    if (!vote) res.status(404).json({ error: "User not found" });
    res.status(200).json({ vote: vote });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = Router()
  .post("/", create)
  .get("/", getAll)
  .get("/:streamerId", getOne)
  .put("/:streamerId/vote", update);

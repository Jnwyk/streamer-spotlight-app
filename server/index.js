const express = require("express");
const db = require("./db.js");
const cors = require("cors");
const PORT = 3080;

const streamerRoutes = require("./streamerRoutes.js");

app = express();

app.use(cors());
app.use(express.json());

db.sequelize.sync().then(() => console.log("Connected with db"));

app.use("/streamers", streamerRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

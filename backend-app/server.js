const mongodb = require("./app/config/db.mongodb");
const express = require("express");
const cors = require("cors");
const { sequelize } = require("./app/models/index.js");

async function run() {
  try {
    await sequelize.sync({ force: true });
  } catch (error) {
    console.log(error);
  }
}

const app = express();

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync({ force: true });

app.get("/", (req, res) => {
  res.json({ message: "Welcome to inviggo application." });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  mongodb.main();
  console.log(`Server is running on port ${PORT}.`);
  //run();
});

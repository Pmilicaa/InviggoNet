// const mongodb = require("./config/db.mongodb");
// const express = require("express");
// const cors = require("cors");
import { run } from "./models/Message";
import express from "express";
import cors from "cors";
import { sequelize } from "../app/sequelize";

async function start() {
  try {
    await sequelize.sync({ alter: true });
    // await run();
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

app.get("/", (req: any, res: any) => {
  res.json({ message: "Welcome to inviggo application." });
});
sequelize.sync({ force: true });
require("../app/routes/user.routes")(app);
require("../app/routes/post.routes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
  start();
});

// const mongodb = require("./config/db.mongodb");
// const express = require("express");
// const cors = require("cors");
import mongodb from "./config/db.mongodb.js";
import express from "express";
import cors from "cors";
import { sequelize } from "./sequelize";

async function run() {
  try {
    await sequelize.sync({ force: true });
    await mongodb.main();
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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
  run();
});

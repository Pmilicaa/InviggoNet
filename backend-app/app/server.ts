// const mongodb = require("./config/db.mongodb");
// const express = require("express");
// const cors = require("cors");
import { run } from './models/Message'
import express, { Request, Response } from "express";
import cors from "cors";
import { sequelize } from "./sequelize";
import UserRouter from './controllers/user.controller'
import { User } from './ts-models/User';

async function start() {
  try {
    await sequelize.sync({ alter: true });
    const user = {
      email: 'dusanstoajn@gmail.com',
      username: 'dusanstoajn',
      firstName: 'Dusan',
      lastName: 'Stojancevic',
      password: '1234'

    };
    await User.create(user);
    await run();
  } catch (error) {
    console.log(error);
  }
}

const app = express();

var corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));


app.use('/users', UserRouter);


app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Welcome to inviggo application." });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
  start();
});

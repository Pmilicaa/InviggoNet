// const mongodb = require("./config/db.mongodb");
// const express = require("express");
// const cors = require("cors");
import { run } from "./models/Message";
import express, { Request, Response } from "express";
import cors from "cors";
import { sequelize } from "./sequelize";
import { User } from "./ts-models/User";
import { Friendship } from "./ts-models/Friendship";

async function start() {
  try {
    await sequelize.sync({ force: true });
    await Friendship.destroy({
      where: {},
    });
    await User.destroy({
      where: {},
    });
    for (let i = 0; i < 10; i++) {
      const user = {
        email: i + "dusanstoajn@gmail.com",
        username: "user" + i,
        firstName: "Dusan" + i,
        lastName: "Stojancevic" + i,
        password: "1234" + i,
      };
      await User.create(user);
    }
    // await run();
  } catch (error) {
    console.log(error);
  }
}

const app = express();

var corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Welcome to inviggo application." });
});

require("../app/routes/user.routes")(app);
require("../app/routes/post.routes")(app);
require("../app/routes/friendship.routes")(app);
require("../app/routes/comment.routes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
  start();
});

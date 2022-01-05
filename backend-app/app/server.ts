import express, { Request, Response } from "express";
import cors from "cors";
import { sequelize } from "./sequelize";
import { User } from "./ts-models/User";
import { Friendship } from "./ts-models/Friendship";
import busboy from "connect-busboy";
import { upload } from "./firebase/firebase";
import { editUser } from "./services/user.service";
import { MongoClient } from "mongodb";
import mongoose, { ConnectOptions } from "mongoose";
import * as http from "http";

import { connectToDatabase } from "../app/config/mongodb";
import * as socketio from "socket.io";
import { getMessages, newMessage } from "./services/message.service";
import { join } from "path/posix";

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
        age: 30,
        gender: i % 2 ? "male" : "female",
      };
      await User.create(user);
    }
    connectToDatabase();
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

app.post(
  "/api/users/edit",
  busboy({ immediate: true }),
  (req: Request, res: Response) => {
    if (req.busboy) {
      let fileData: Uint8Array | Buffer | null = null;
      let fileName: any;
      const user: any = {
        id: -1,
        email: "",
        username: "",
        firstName: "",
        lastName: "",
        password: "",
        image: "",
        age: 0,
        gender: "",
      };
      req.busboy.on("file", (name, file, info) => {
        fileName = info;
        file.on("data", (data) => {
          if (fileData === null) {
            fileData = data;
          } else {
            fileData = Buffer.concat([fileData, data]);
          }
        });
      });
      req.busboy.on("field", (fieldName, value) => {
        user[fieldName] = value;
      });

      req.busboy.on("finish", async () => {
        if (fileName) {
          const url = await upload(fileData, fileName);
          user.image = url;
        }
        const newUser = await editUser(user);
        res.json(newUser);
      });
    }
  }
);

require("../app/routes/user.routes")(app);
require("../app/routes/post.routes")(app);
require("../app/routes/message.routes")(app);
require("../app/routes/friendship.routes")(app);
require("../app/routes/comment.routes")(app);

const server = http.createServer(app);

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});
io.on("connection", (socket: any) => {
  socket.on("join_room", (data: any) => {
    socket.join(data);
    getMessages(data).then((messages) => io.emit("chat_messages", messages));
  });

  socket.on("send_message", (data: any) => {
    async function message(data: any) {
      const addedMessage = await newMessage(data);
      return addedMessage;
    }
    message(data).then((added) => io.emit("receive_message", added));
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});
console.log("usao");
server.listen(5000, () => {
  start();
  console.log("Running at localhost:5000");
});

export { io };

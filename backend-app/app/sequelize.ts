import { Sequelize } from "sequelize-typescript";

export const sequelize = new Sequelize({
  username: "root",
  password: "root",
  database: "inviggoNet",
  host: "127.0.0.1",
  dialect: "mysql",
  models: [__dirname + "/ts-models"],
});

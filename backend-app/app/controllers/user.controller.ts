const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;
import userRepo from "../repositories/user.repository";
import register from "../services/user.service";

// exports.findAll = async (req: any, res: any) => {
//   const users = await userRepo.getAllUsers();
//   console.log(users);
//   res.send(JSON.stringify(users));
// };
exports.registerUser = async (req: any, res: any) => {
  const user = await register(req.body);
  console.log(user);
  res.send(JSON.stringify(user));
};

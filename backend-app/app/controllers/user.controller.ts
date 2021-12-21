import { Request, Response } from "express";
import {
  register,
  getUsers,
  getMe,
  searchUsers,
  getFriendInfo,
} from "../services/user.service";

exports.findAll = async (req: any, res: any) => {
  const users = await getUsers();
  console.log(users);
  res.send(JSON.stringify(users));
};
exports.registerUser = async (req: any, res: any) => {
  const user = await register(req.body);
  console.log(req.body.username + "dosao user");
  res.send(JSON.stringify(user));
};
exports.getMyInfo = async (req: any, res: any) => {
  if (!req.user) {
    res.sendStatus(401);
  } else {
    const user = await getMe(req.user.user_name);
    console.log(JSON.stringify(user) + "user za koji su potrebne inf");
    res.send(JSON.stringify(user));
  }
};
exports.getFriend = async (req: any, res: any) => {
  if (!req.body) {
    res.sendStatus(401);
  } else {
    const user = await getFriendInfo(req.body.userId);
    console.log(JSON.stringify(user) + "info prijatelj");

    res.send(JSON.stringify(user));
  }
};
exports.search = async (req: Request, res: Response) => {
  const search = req.query.search as string;
  try {
    // Kasnije iz jwt izvuci idUsera
    const users = await searchUsers(search, 1);
    return res.json(users);
  } catch (error) {
    return res.sendStatus(400);
  }
};

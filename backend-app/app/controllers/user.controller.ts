import { Request, Response } from 'express'
import { register, getUsers, getMe, searchUsers } from "../services/user.service";

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
  const user = await getMe(req.body);
  res.send(JSON.stringify(user));
};

exports.search = async (req: Request, res: Response) => {
  console.log(req.query);
  const search = req.query.search as string;
  try {
    const users = await searchUsers(search);
    return res.json(users);

  } catch (error) {
    return res.sendStatus(400);
  }
}

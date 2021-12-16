import { register, getUsers, getMe } from "../services/user.service";

exports.findAll = async (req: any, res: any) => {
  const users = await getUsers();
  console.log(users);
  res.send(JSON.stringify(users));
};
exports.registerUser = async (req: any, res: any) => {
  const user = await register(req.body);
  console.log(user);
  res.send(JSON.stringify(user));
};
exports.getMyInfo = async (req: any, res: any) => {
  const user = await getMe(req.body);
  res.send(JSON.stringify(user));
};

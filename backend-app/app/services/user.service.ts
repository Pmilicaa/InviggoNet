import { getAllUsers, createUser } from "../repositories/user.repository";

const getUsers = async () => {
  const users = await getAllUsers();
  return users;
};
const register = async (params: any) => {
  createUser(params);
  console.log(params);
};
export { register, getUsers };

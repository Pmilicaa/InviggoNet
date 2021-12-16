import {
  getAllUsers,
  createUser,
  getOne,
  searchUser
} from "../repositories/user.repository";
import { User } from "../ts-models/User";

const getUsers = async () => {
  const users = await getAllUsers();
  return users;
};
const register = async (params: any) => {
  createUser(params);
  console.log(params);
};
const getMe = async (params: any) => {
  try {
    const user = await getOne(params);
    return user;
    console.log(JSON.stringify(user) + "user lik");
  } catch (err: any) {
    throw new Error();
  }
};

const searchUsers = async (query: string): Promise<User[]> => {
  return await searchUser(query);
}

export { register, getUsers, getMe, searchUsers };

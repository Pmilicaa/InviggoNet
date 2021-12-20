import {
  getAllUsers,
  createUser,
  getOne,
  searchUser,
} from "../repositories/user.repository";
import { User } from "../ts-models/User";

const getUsers = async () => {
  const users = await getAllUsers();
  return users;
};
const register = async (params: any) => {
  const joka = await createUser(params);
  console.log(joka.username + "user u servicu kao");
};
const getMe = async (params: any) => {
  try {
    console.log(params.username + "parametri su ti i ti");
    const user = await getOne(params);
    return user;
    console.log(JSON.stringify(user) + "user lik");
  } catch (err: any) {
    throw new Error();
  }
};

const searchUsers = async (query: string): Promise<User[]> => {
  return await searchUser(query);
};

export { register, getUsers, getMe, searchUsers };

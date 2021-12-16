import {
  getAllUsers,
  createUser,
  getOne,
} from "../repositories/user.repository";

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
    const user = await getOne(params);
    return user;
    console.log(JSON.stringify(user) + "user lik");
  } catch (err: any) {
    throw new Error();
  }
};
export { register, getUsers, getMe };

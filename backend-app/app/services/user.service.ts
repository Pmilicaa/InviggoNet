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
export { register, getUsers, getMe };

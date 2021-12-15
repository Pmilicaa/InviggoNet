import { User } from "../ts-models/User";

const getAllUsers = async () => {
  let users = await User.findAll();
  return users;
};
const createUser = async (body: any) => {
  try {
    const user = {
      email: String(body.email),
      username: String(body.username),
      password: String(body.password),
      firstName: String(body.firstName),
      lastName: String(body.lastName),
      gender: String(body.gender),
      age: Number(body.age),
    };
    User.create(user);
    return user;
  } catch (err: any) {
    throw new Error(err);
  }
};
export { createUser, getAllUsers };

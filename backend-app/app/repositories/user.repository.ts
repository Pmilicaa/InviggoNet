const db = require("../models");
const User = db.users;
const getAllUsers = async () => {
  let users = await User.findAll();
  return users;
};

const createUser = async (body: typeof User) => {
  let user;
  try {
    user = {
      email: body.email,
      username: body.username,
      password: body.password,
      firstName: body.firstName,
      lastName: body.lastName,
      age: body.age,
      phoneNumber: body.phoneNumber,
    };
    User.create(user);
  } catch (err: any) {
    throw new Error(err);
  }
  return user;
};
export default createUser;

import { User } from "../ts-models/User";
import { getPost } from "../repositories/post.repository";
import { Op } from "sequelize";

const searchUser = async (query: string): Promise<User[]> => {
  let users = await User.findAll({
    where: {
      [Op.or] : [
        {
          username: {
            [Op.substring]: query
          }
        }, 
        {
          firstName: {
            [Op.substring]: query
          }
        }, 
        {
          lastName: {
            [Op.substring]: query
          }
        }
      ]
    }
  });
  return users;
}


const getAllUsers = async () => {
  let users = await User.findAll();
  return users;
};
const getOne = async (username: any) => {
  try {
    const user = await User.findOne({
      where: {
        username: username.username,
      },
    });
    return user;
  } catch (err: any) {
    throw new Error(err);
  }
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
const addPostToUser = async (body: any) => {
  const id = body.userId;
  console.log(id + "id usera");

  try {
    const result = await User.update({ posts: body }, { where: { id } });
  } catch (err) {
    throw new Error();
  }
};
export { createUser, getAllUsers, getOne, addPostToUser, searchUser };


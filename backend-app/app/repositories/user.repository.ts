import { User } from "../ts-models/User";
import { getPost } from "../repositories/post.repository";
import { Op, fn, col, where } from "sequelize";

const searchUser = async (query: string): Promise<User[]> => {
  let users = await User.findAll({
    raw: true,
    where: {
      [Op.or] : [
        where(fn('concat', 
              col('firstName'), ' ', col('lastName')),
              {
                [Op.substring]: query
              }
        ),
        {
          username: {
            [Op.substring]: query,
          },
        },
        {
          firstName: {
            [Op.substring]: query,
          },
        },
        {
          lastName: {
            [Op.substring]: query,
          },
        },
      ],
    },
  });
  return users;
};

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

export const getOneById = async (id: number): Promise<User | null> => {
  const user = await User.findByPk(id);
  return user;
}

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
    console.log(user.username + "user u repou");
    try {
      const newUser = await User.create(user);
      console.log("success", newUser.toJSON());
    } catch (err) {
      console.log(err, user.email);
    }
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

import { UserSearchDTO } from "../dto/user..search.dto.";
import {
  getAllUsers,
  createUser,
  getOne,
  searchUser,
  getInfo,
} from "../repositories/user.repository";
import { checkFriends } from "../repositories/friendship.repository";

const getUsers = async () => {
  const users = await getAllUsers();
  return users;
};
const register = async (params: any) => {
  const createdUser = await createUser(params);
  console.log(createdUser.username + "user u servicu kao");
};
const getMe = async (username: string) => {
  try {
    const user = await getOne(username);
    return user;
  } catch (err: any) {
    throw new Error();
  }
};
const infoForLogin = async (params: any) => {
  try {
    const user = await getInfo(params);
    return user;
    console.log(JSON.stringify(user) + "user lik");
  } catch (err: any) {
    throw new Error();
  }
};

const searchUsers = async (
  query: string,
  userId: number
): Promise<UserSearchDTO[]> => {
  const users = await searchUser(query);
  const usersDTO: UserSearchDTO[] = [];
  for (const user of users) {
    const userDTO: UserSearchDTO = user;
    userDTO.friends = await checkFriends(userId, user.id);
    usersDTO.push(userDTO);
  }
  return usersDTO;
};

export { register, getUsers, getMe, searchUsers, infoForLogin };

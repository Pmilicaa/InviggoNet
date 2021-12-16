import createUser from "../repositories/user.repository";
import { User } from '../ts-models/User'
import userRepository from "../repositories/user.repository";

const searchUsers = async (query: string): Promise<User[]> => {
  return await userRepository.searchUser(query);
}

export default { searchUsers  };

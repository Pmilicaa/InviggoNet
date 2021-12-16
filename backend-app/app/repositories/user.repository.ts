import { User } from '../ts-models/User';
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

export default { searchUser };

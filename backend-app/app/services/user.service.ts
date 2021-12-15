const { sequelize, User } = require("../models");
import createUser from "../repositories/user.repository";

const register = async (params: any) => {
  createUser(params);
};
export default register;

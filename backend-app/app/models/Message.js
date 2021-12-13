"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    static associate(model) {}
  }
  Message.init(
    {},
    {
      sequelize,
      modelName: "Like",
    }
  );
  return Message;
};

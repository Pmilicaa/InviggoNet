"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Friendship extends Model {
    static associate({ User }) {
      this.belongsToMany(User, { through: "UserFriendship", as: "users" });
    }

    toJSON() {
      return { ...this.get(), updatedAt: undefined };
    }
  }
  Friendship.init(
    {
      accepted: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Friendship",
    }
  );
  return Friendship;
};

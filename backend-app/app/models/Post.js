"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate({ User, Like, Comment }) {
      this.belongsTo(User, { foreignKey: "userId", as: "user" });
      this.hasMany(Like, { foreignKey: "postId", as: "likes" });
      this.hasMany(Comment, { foreignKey: "postId", as: "comments" });
    }

    toJSON() {
      return { ...this.get(), updatedAt: undefined };
    }
  }
  Post.init(
    {
      content: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Content can't be empty" },
          notNull: { msg: "Content can't be null" },
        },
      },
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};

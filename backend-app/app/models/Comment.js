'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Comment extends Model {
        static associate({ User }) {
            this.belongsTo(User, { foreignKey: 'userId', as: 'user', constraints: false});
        }

        toJSON() {
            return { ...this.get(), updatedAt: undefined }
        }
    };
    Comment.init({
        content: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: "Content can't be empty" },
                notNull: { msg: "Content can't be null" },
            }
        }
    }, {
        sequelize,
        modelName: 'Comment',
    });
    return Comment;
};
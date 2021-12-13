'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate({ Post, Comment, Friendship }) {
            this.hasMany(Post, { foreignKey: 'userId', as: 'posts' });
            this.hasOne(Comment, {foreignKey: 'userId', as: 'comment', constraints: false})
            this.belongsToMany(Friendship, { through: 'UserFriendship', as: 'friendships'})
        }

        toJSON() {
            return { ...this.get(), createdAt: undefined, updatedAt: undefined }
        }
    };
    User.init({
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isEmail: { msg: 'Not correct email format' },
                notEmpty: { msg: "Email can't be empty" },
                notNull: { msg: "Email can't be null" },
            }
        },
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: { msg: "Username can't be empty" },
                notNull: { msg: "Username can't be null" },
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: "Password can't be empty" },
                notNull: { msg: "Password can't be null" },
            }
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: "First name can't be empty" },
                notNull: { msg: "First name can't be null" },
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: "Last name can't be empty" },
                notNull: { msg: "Last name can't be null" },
            }
        },
        gender: DataTypes.STRING,
        age: DataTypes.INTEGER,
        phoneNumber: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
};
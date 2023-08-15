const sequelize = require("../db/sequelize");
const { DataTypes } = require("sequelize");

const User = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      unique: "compositeIndex",
    },
    type: {
      type: DataTypes.ENUM("kakao"),
      allowNull: true,
    },
    full_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.CHAR(60),
      defaultValue: null,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    hooks: {
      beforeSave: (user, options) => {
        const [type, password] = [
          user?.dataValues?.type,
          user?.dataValues?.password,
        ];
        if (type && password) {
          throw new Error("Password must be null for OAuth type");
        }
        if (!type && !password) {
          throw new Error("Password must not be null for general type");
        }
      },
    },
  }
);

module.exports = User;

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
    full_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    password: {
      type: DataTypes.CHAR(60),
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = User;

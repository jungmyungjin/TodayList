const sequelize = require("../db/sequelize");
const User = require("./user");
const { DataTypes } = require("sequelize");

const Task = sequelize.define(
  "task",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      unique: "compositeIndex",
    },
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        // 제약조건
        // 외래키
        model: User, // 참조 모델
        key: "id", // 참조된 모델 컬럼
      },
    },
    parents_id: {
      // self-referencing
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    contents: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      // TODO, COMPLETE,
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Task;

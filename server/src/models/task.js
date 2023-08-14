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
      allowNull: false,
    },
    todo_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique: true,
    },
    user_email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      references: {
        // 제약조건
        // 외래키
        model: User, // 참조 모델
        key: "email", // 참조된 모델 컬럼
      },
    },
    parents_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
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
    date: {
      // TODO, COMPLETE,
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Task;

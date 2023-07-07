const { check, validationResult } = require("express-validator");
const { User } = require("../models/index");
const { passwordHash } = require("../utils/index");

const getUsers = async () => {
  const allUsers = await User.findAll();
  return allUsers;
};

const findUser = async (email) => {
  const user = await User.findOne({ where: { email: email } });
  console.log(user);
  return user;
};

const createUser = async (req, res) => {
  const { email, full_name, password } = req.body;
  // 1. 입력받은 데이터 확인
  console.log("👁 createUser ==> ", req.body, "||");

  // 2. 유효성확인
  // 이메일 중복 확인
  console.log("👁 userService : createUser ", email);
  const foundUser = await findUser(email);
  if (foundUser) {
    console.log("👁 userService : createUser Not NULL", findUser(email));
    res.status(409); // Conflict
    throw new Error("services/userService/createUser:Registered Email");
  }

  // 3. password 해시화
  const hashedPassword = await passwordHash(password);

  // 4. db에 저장
  const registerUser = {
    email: email,
    full_name: full_name,
    password: hashedPassword,
  };

  const createUser = await User.create(registerUser);
  console.log("createUser : ", createUser);
  return { email: email, full_name: full_name };
};

module.exports = {
  getUsers,
  createUser,
};

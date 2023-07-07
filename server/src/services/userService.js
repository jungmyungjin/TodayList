const { check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const { User } = require("../models/index");
const { generateAccessToken, passwordHash } = require("./authService");

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // 1. 존재하는 아이디인지 확인
  // 없는 아이디인 경우 에러처리
  const foundUser = await findUser(email);
  if (!foundUser) {
    throw new Error(["login denied", "Invalid email"]);
  }

  // 2. 비밀번호 해시 비교하여 비밀번호 검증
  // 패스워드 안맞는 경우 에러처리
  {
    // 2-1. DB에서 비밀번호 꺼내오기
    // 2-2. 비밀번호 매칭하기
    const match = await bcrypt.compare(password, foundUser.password);
    if (!match) {
      throw new Error(["login denied", "Invalid password"]);
    }
  }
  // 3. JWT 토큰 생성
  const jwt = generateAccessToken({
    email: foundUser.email,
    full_name: foundUser.full_name,
  });
  return jwt;
};

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
  loginUser,
};

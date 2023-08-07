const bcrypt = require("bcrypt");
const { User } = require("../../models/index");
const { generateAccessToken, passwordHash } = require("./authService");
const { ConflictError, UnauthorizedError } = require("../../errors");
const jwt = require("jsonwebtoken");

const loginUser = async ({ email, password, type }) => {
  // 1. 존재하는 아이디인지 확인
  // 없는 아이디인 경우 에러처리
  const foundUser = await findUser(email);
  if (!foundUser) {
    throw new UnauthorizedError({
      message: "SignIn denied",
      detail: "Invalid email",
    });
  }

  // 2. 비밀번호 해시 비교하여 비밀번호 검증
  // 패스워드 안맞는 경우 에러처리
  if (type === "standard") {
    // 2-1. DB에서 비밀번호 꺼내오기
    // 2-2. 비밀번호 매칭하기
    const match = await bcrypt.compare(password, foundUser.password);

    if (!match) {
      throw new UnauthorizedError({
        message: "SignIn denied",
        detail: "Invalid password",
      });
    }
  }

  // 3. JWT 토큰 생성
  const jwt = generateAccessToken({
    email: foundUser.email,
    full_name: foundUser.full_name,
  });
  return jwt;
};

const loginOAuth = async ({ email, full_name = "", type }) => {
  // 1. 존재하는 아이디인지 확인
  // 없는 아이디인 경우 회원 가입
  const foundUser = await findUser(email);

  if (!foundUser) {
    const registerUser = {
      email: email,
      full_name: full_name,
      type: type,
    };

    const createUser = await User.create(registerUser);
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
  try {
    const user = await User.findOne({ where: { email: email } });
    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const createUser = async ({ email, full_name, password }) => {
  // 1. 입력받은 데이터 확인
  // console.log("👁 createUser ==>", email, full_name, password);

  // 2. 유효성확인

  // 입력받은 데이터 확인
  if (!email || !full_name || !password) {
    throw new UnauthorizedError({
      message: "SignUp denied",
      detail: "Required data is empty",
    });
  }
  // 이메일 중복 확인
  // console.log("👁 userService : createUser ", email);
  const foundUser = await findUser(email);
  if (foundUser) {
    throw new ConflictError({
      message: "SignUp denied",
      detail: "Already Signed Up Email",
    });
  }

  // 3. password 해시화
  const hashedPassword = await passwordHash(password);

  // 4. db에 저장
  const registerUser = {
    email: email,
    full_name: full_name,
    password: hashedPassword,
  };

  const createdUser = await User.create(registerUser);
  return { email: email, full_name: full_name };
};

const getUserInfo = async (token) => {
  if (!token) {
    return false;
  }
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    console.log(error.message);
  }
  return false;
};

module.exports = {
  loginUser,
  getUsers,
  findUser,
  createUser,
  getUserInfo,
  loginOAuth,
};

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const passwordHash = async (planPassword, saltRounds = 10) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(planPassword, saltRounds, (err, hash) => {
      if (err) {
        reject(err);
      }
      resolve(hash);
    });
  });
};

const generateAccessToken = (data) => {
  const payload = { data }; // TODO : createAt 생성날짜 넣기
  const options = {
    expiresIn: "1h",
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET, options);
  return token;
};

module.exports = { passwordHash, generateAccessToken };

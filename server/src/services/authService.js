const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const passwordHash = async (planPassword, saltRounds = 10) => {
  return new Promise((resolve, reject) => {
    console.log("in passwordHash");
    bcrypt.hash(planPassword, saltRounds, (err, hash) => {
      if (err) {
        console.log("reject passwordHash");
        reject(err);
      }
      console.log("resolve passwordHash");

      resolve(hash);
    });
  });
};

const generateAccessToken = (data) => {
  const payload = { data }; // TODO : createAt 생성날짜 넣기
  const options = {
    expiresIn: "1h",
  };
  console.log("payload = ", payload);
  const token = jwt.sign(payload, process.env.JWT_SECRET, options);
  return token;
};

module.exports = { passwordHash, generateAccessToken };

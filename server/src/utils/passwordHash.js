const bcrypt = require("bcrypt");

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

module.exports = passwordHash;

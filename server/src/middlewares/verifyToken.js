const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token || "";
  if (!token) {
    return res.status(403).send({ auth: false, message: "No token provided." });
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err)
      return res
        .status(500)
        .send({ auth: false, message: "Failed to authenticate token." });

    // 검증된 토큰이라면, 토큰 내의 정보를 요청에 저장
    req.userInfo = {
      email: decoded?.data?.email,
      full_name: decoded?.data?.full_name,
      user_id: decoded.data.user_id,
    };
    next();
  });
};
module.exports = verifyToken;

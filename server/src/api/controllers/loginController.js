const axios = require("axios");
const { errorHandler } = require("../../middlewares/index");
const { loginUser } = require("../services/userService");
const {
  getKakaoAccessToken,
  getKaKaoUserInfoByToken,
} = require("../services/kakaoService");

class LoginController {
  login = errorHandler(async (req, res) => {
    const { email, full_name, password, type } = req.body;
    const jwt = await loginUser({ email, full_name, password, type });
    res.cookie("access_token", jwt, {
      httpOnly: true,
    });
    res.status(200).json({ token: jwt });
    res.end();
  });

  loginKakao = errorHandler(async (req, res) => {
    const code = req?.query?.code;
    try {
      const accessToken = await getKakaoAccessToken(code);
      const userInfo = await getKaKaoUserInfoByToken(accessToken);
      const email = userInfo?.kakao_account?.email;
      const full_name = userInfo?.properties?.nickname;

      const jwt = await loginUser({ email, full_name, type: "kakao" });
      res.cookie("access_token", jwt, {
        httpOnly: true,
      });

      await res
        .redirect(process.env.FRONTEND_ADDRESS)
        .json({ token: jwt })
        .end();
    } catch (error) {
      console.log(error.message);
    }
  });
}
module.exports = new LoginController();

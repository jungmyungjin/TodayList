const axios = require("axios");
const { errorHandler } = require("../../middlewares/index");
const { loginUser, loginOAuth, findUser } = require("../services/userService");
const {
  getKakaoAccessToken,
  getKaKaoUserInfoByToken,
} = require("../services/kakaoService");

class LoginController {
  login = errorHandler(async (req, res) => {
    const { email, full_name, password } = req.body;
    const jwt = await loginUser({ email, full_name, password });
    res.cookie("access_token", jwt, {
      httpOnly: true,
    });
    return res.status(200).end();
  });

  loginKakao = errorHandler(async (req, res) => {
    const code = req?.query?.code;
    try {
      const accessToken = await getKakaoAccessToken(code);
      const userInfo = await getKaKaoUserInfoByToken(accessToken);
      const email = userInfo?.kakao_account?.email;
      const full_name = userInfo?.properties?.nickname;

      const jwt = await loginOAuth({ email, full_name, type: "kakao" });
      res.cookie("access_token", jwt, {
        path: "/",
        domain: process.env.TODAY_LIST_DOMAIN,
        httpOnly: true,
        sameSite: "none",
        secure: true,
      });

      return res.redirect(process.env.FRONTEND_ADDRESS + "/TodayList");
    } catch (error) {
      console.log(error.message);
    }
  });
}
module.exports = new LoginController();

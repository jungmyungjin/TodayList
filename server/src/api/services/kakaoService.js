const axios = require("axios");
const { UnauthorizedError } = require("../../errors");

/**
 * 카카오 로그인 CODE를 받아 ACCESS_TOKEN을 리턴하는 함수
 * @param {string} code
 * @returns
 */
const getKakaoAccessToken = async (code) => {
  let accessToken = null;
  try {
    const response = await axios.post(
      "https://kauth.kakao.com/oauth/token",
      {
        grant_type: "authorization_code",
        client_id: process.env.KAKAO_CLIENT_ID,
        redirect_uri: process.env.BACKEND_ADDRESS + "/api/auth/kakao",
        code: code,
      },
      {
        headers: {
          "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      }
    );
    accessToken = response?.data?.access_token;
  } catch (error) {
    throw new UnauthorizedError({
      message: "Kakao Login Failed",
      detail: error.message,
    });
  }

  return accessToken;
};

/**
 * 카카오 ACCESS_TOKEN 를 사용하여 카카오 사용자 정보를 가져와 리턴하는 함수
 * @param {string} accessToken
 * @returns
 */
const getKaKaoUserInfoByToken = async (accessToken) => {
  let userInfo = null;
  try {
    const response = await axios.get("https://kapi.kakao.com/v2/user/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    });
    userInfo = response.data;
  } catch (error) {
    throw new UnauthorizedError({
      message: "Kakao Login Failed",
      detail: error.message,
    });
  }

  return userInfo;
};

module.exports = { getKakaoAccessToken, getKaKaoUserInfoByToken };

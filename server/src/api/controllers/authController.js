const express = require("express");
const { errorHandler } = require("../../middlewares/index");

class AuthController {
  // 로그아웃
  logout = errorHandler(async (req, res) => {
    const token = req.cookies?.access_token;
    if (!token) {
      return res.status(204).end();
    }
    // 코드 내용
    res
      .clearCookie("access_token", {
        path: "/",
        domain: process.env.TODAY_LIST_DOMAIN,
        httpOnly: true,
        sameSite: "none",
        secure: true,
      })
      .status(200)
      .end();
  });
}

module.exports = new AuthController();

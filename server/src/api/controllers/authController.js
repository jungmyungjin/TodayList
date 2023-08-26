const express = require("express");
const { errorHandler } = require("../../middlewares/index");

class AuthController {
  login = errorHandler(async (req, res) => {
    const jwt = await loginUser(req, res);
    res.cookie("access_token", jwt, {
      path: "/",
      domain: process.env.TODAY_LIST_DOMAIN,
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });
    res.status(200).json({ token: jwt });
    res.end();
  });
  logout = errorHandler(async (req, res) => {
    // 코드 내용
    res.clearCookie("access_token").status(205).end();
  });

  github = errorHandler(async (req, res) => {
    // 코드 내용
    res.clearCookie("access_token").status(205).end();
  });
}

module.exports = new AuthController();

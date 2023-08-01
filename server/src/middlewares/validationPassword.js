const { check, validationResult } = require("express-validator");
const { BadRequestError } = require("../errors");
/**
 * 패스워드 유효성 검사
 * @param {*} requestHandler
 * @returns 에러가 있는 경우 error처리, 없는 경우 next
 */
const validationPassword = [
  check(
    "password",
    "비밀번호는 최소 8글자이며 알파벳 소문자, 대문자, 숫자, 특수문자를 포함해야 합니다."
  )
    .isLength({ min: 8 })
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/),
  (req, res, next) => {
    const errors = validationResult(req);
    // console.log("👁 after validationResult");
    if (!errors.isEmpty() || req.body?.password !== req.body?.confirmPassword) {
      // console.log("👁 validationResult isEmpty");
      next(
        new BadRequestError({
          message: "Password validation failed",
          detail: errors,
        })
      );
    }
    next();
  },
];

module.exports = validationPassword;

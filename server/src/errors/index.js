const BadRequestError = require("./BadRequestError");
const ConflictError = require("./ConflictError");
const UnauthorizedError = require("./UnauthorizedError");
const ForbiddenError = require("./ForbiddenError");
const InternalServerError = require("./InternalServerError");

module.exports = {
  BadRequestError,
  ConflictError,
  UnauthorizedError,
  ForbiddenError,
  InternalServerError,
};

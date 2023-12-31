const {
  BadRequestError,
  ConflictError,
  UnauthorizedError,
  InternalServerError,
} = require("../errors");
/**
 *
 * @param {*} requestHandler
 * @returns 에러 핸들러를 래핑한 함수
 */
const errorHandler = (requestHandler) => {
  return async (req, res, next) => {
    try {
      await requestHandler(req, res);
    } catch (err) {
      if (err instanceof BadRequestError) {
        res
          .status(err.statusCode)
          .json({ message: err.message, detail: err.detail })
          .end();
      } else if (err instanceof UnauthorizedError) {
        res
          .status(err.statusCode)
          .json({ message: err.message, detail: err.detail })
          .end();
      } else if (err instanceof ConflictError) {
        res
          .status(err.statusCode)
          .json({ message: err.message, detail: err.detail })
          .end();
      } else if (err instanceof InternalServerError) {
        res
          .status(err.statusCode)
          .json({ message: err.message, detail: err.detail })
          .end();
      } else {
        res
          .status(500)
          .json({
            message: "An unexpected error occurred",
            detail: err.message,
          })
          .end();
      }
    }
  };
};

module.exports = errorHandler;

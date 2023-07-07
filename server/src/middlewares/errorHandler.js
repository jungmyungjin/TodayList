/**
 *
 * @param {*} requestHandler
 * @returns 에러 핸들러를 래핑한 함수
 */
const errorHandler = (requestHandler) => {
  return async (req, res, next) => {
    try {
      await requestHandler(req, res);
    } catch (error) {
      if (
        error.message === "services/userService/createUser:Registered Email"
      ) {
        res.status(409); // Conflict
      } else {
        res.status(500); // Internal Server Error)
      }
      next(error);
    }
  };
};

module.exports = errorHandler;

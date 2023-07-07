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
      switch (error.message[0]) {
        case "services/userService/createUser:Registered Email":
          res.status(409); // Conflict
          break;
        case "login denied":
          res.status(401); // unauthorized
          break;
        default:
          res.status(500); // Internal Server Error)
      }

      next(error);
    }
  };
};

module.exports = errorHandler;

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
      console.log("에러메시지", error.message);
      switch (error.message) {
        case "login denied,Invalid email":
          console.log("400");
          res.status(400);
          break;
        case "login denied,Invalid password":
          console.log("401");
          res.status(401);
          break;
        case "[middleware] validationPassword":
          res.status(401);
          break;
        case "services/userService/createUser:Registered Email":
          res.status(409); // Conflict
          break;
        case "services/userService/createUser:Required data not found":
          res.status(400);
          break;
        // case "login denied":
        //   res.status(401); // unauthorized
        //   break;
        default:
          res.status(500); // Internal Server Error)
      }
      res.json(error);
    }
  };
};

module.exports = errorHandler;

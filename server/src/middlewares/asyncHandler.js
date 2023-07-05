/**
 *
 * @param {*} requestHandler
 * @returns 에러 핸들러를 래핑한 함수
 */
const asyncHandler = (requestHandler) => {
  return async (req, res, next) => {
    try {
      await requestHandler(req, res);
    } catch (err) {
      next(err);
    }
  };
};

module.exports = asyncHandler;

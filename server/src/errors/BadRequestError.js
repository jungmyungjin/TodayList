class BadRequestError extends Error {
  constructor({ message = "Bad Request", detail = "" }) {
    super();
    this.statusCode = 400;
    this.message = message + detail;
    this.detail = detail;
  }
}

module.exports = BadRequestError;

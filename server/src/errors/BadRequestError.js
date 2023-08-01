class BadRequestError extends Error {
  constructor({ message = "Bad Request", detail = "" }) {
    super();
    this.statusCode = 400;
    this.message = message;
    this.detail = detail;
  }
}

module.exports = BadRequestError;

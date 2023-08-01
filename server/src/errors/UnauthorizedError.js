class UnauthorizedError extends Error {
  constructor({ message = "", detail = "" }) {
    super();
    this.statusCode = 401;
    this.message = message;
    this.detail = detail;
  }
}

module.exports = UnauthorizedError;

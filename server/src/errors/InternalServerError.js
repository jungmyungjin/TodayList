class InternalServerError extends Error {
  constructor({ message = "", detail = "" }) {
    super();
    this.statusCode = 500;
    this.message = message;
    this.detail = detail;
  }
}

module.exports = InternalServerError;

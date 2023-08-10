class InternalServerError extends Error {
  constructor({ message = "", detail = "" }) {
    super();
    this.statusCode = 500;
    this.message = message + detail;
    this.detail = detail;
  }
}

module.exports = InternalServerError;

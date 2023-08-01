class ForbiddenError extends Error {
  constructor({ message = "Forbidden", detail = "" }) {
    super();
    this.statusCode = 403;
    this.message = message;
    this.detail = detail;
  }
}
module.exports = ForbiddenError;

class ConflictError extends Error {
  constructor({ message = "Conflict", detail = "" }) {
    super();
    this.statusCode = 409;
    this.message = message + detail;
    this.detail = detail;
  }
}
module.exports = ConflictError;

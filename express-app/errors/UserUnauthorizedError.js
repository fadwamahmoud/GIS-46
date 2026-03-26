// author => not found

// Custom error => pattern for any use case
// centralized error
class UnauthorizedError extends Error {
  constructor(message) {
    super(message);

    this.statusCode = 403;
    // NotFoundError

    this.name = "UnauthorizedError";
  }
}

export default UnauthorizedError;

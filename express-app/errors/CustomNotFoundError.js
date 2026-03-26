// author => not found

// Custom error => pattern for any use case
// centralized error
class CustomNotFoundError extends Error {
  constructor(message) {
    super(message);

    this.statusCode = 404;
    // NotFoundError

    this.name = "NotFoundError";
  }
}

export default CustomNotFoundError;

class ErrorResponse extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = ErrorResponse;

// class ErrorResponse extends Error {
//   constructor(statusCode, message) {
//     super(message);
//     this.statusCode = statusCode;
//   }
// }

// module.exports = ErrorResponse;

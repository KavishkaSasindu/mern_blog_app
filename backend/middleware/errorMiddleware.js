// unsupported 404

const notFound = (request, response, next) => {
  const error = new Error(`Not found ${request.originalUrl}`);

  response.status(404);
  next(error);
};

// error handler
const errorHandler = (error, request, response, next) => {
  if (response.headerSent) {
    return next(error);
  }

  response.status(error.code || 500).json({
    message: "unknown error",
  });
};

module.exports = { notFound, errorHandler };

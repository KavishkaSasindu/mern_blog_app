const jwt = require("jsonwebtoken");

const authMiddleware = async (request, response, next) => {
  const authorizationHeader = request.headers.authorization;
  try {
    if (!authorizationHeader) {
      return response.status(401).json({
        message: "header is missed",
      });
    }

    const token = authorizationHeader.split(" ")[1];
    if (token) {
      const decoded = jwt.verify(token, process.env.SECRET);
      if (!decoded) {
        return response.status(401).json({
          message: "can not verify",
        });
      }
      next();
    }
  } catch (error) {
    return response.status(401).json({
      message: "Unauthorized access",
      error: error.message,
    });
  }
};

module.exports = authMiddleware;

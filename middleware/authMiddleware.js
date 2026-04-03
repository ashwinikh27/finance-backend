// Role-based access control middleware
const jwt = require("jsonwebtoken");

exports.authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    const userRole = req.headers.role;

    if (!userRole) {
      return res.status(401).json({ message: "No role provided" });
    }

    if (!allowedRoles.includes(userRole)) {
      return res.status(403).json({ message: "Access denied" });
    }

    next();
  };
};


exports.authenticate = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, "secretkey");
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
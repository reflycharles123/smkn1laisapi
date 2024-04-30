import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";

// middleware admin
const isAdmin = (req, res, next) => {
  if (req.user && req.user.status === "admin") {
    next();
  } else {
    res.status(401);
    throw new Error("Invalid action request.");
  }
};

export {isAdmin};

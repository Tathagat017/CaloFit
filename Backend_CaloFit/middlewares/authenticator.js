const jwt = require("jsonwebtoken");
require("dotenv").config();

const auth = (req, res, next) => {
  const token = req.headers.authorization;
  try {
    if (!token) throw new Error("Token not found");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userID = decoded.userID;
    next();
  } catch (error) {
    res.status(401).send({ message: error.message });
  }
};

module.exports = { auth };

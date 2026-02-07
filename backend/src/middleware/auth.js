import jwt from "jsonwebtoken";

export const requireAuth = (req, res, next) => {
  const header = req.headers.authorization;
  if (!header) {
    return res.status(401).json({ message: "Authorization header missing" });
  }

  const token = header.replace("Bearer ", "");
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET || "local-dev-secret");
    req.user = payload;
    return next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

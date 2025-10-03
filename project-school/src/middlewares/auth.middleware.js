import jwt from "jsonwebtoken";
import jwtConfig from "../config/jwt.config.js";

export const authMiddlewares = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(401).json({ error: "Token não informado" });
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, jwtConfig.secret, (err, decoded) => {
    if (err) return res.status(403).json({ error: "Token inválido" });
    req.userId = decoded.id;
    next();
  });
};

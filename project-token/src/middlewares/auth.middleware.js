import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // "Bearer <token>"

  if (!token) {
    return res.status(403).json({ error: "Token não fornecido" });
  }

  jwt.verify(token, "SECRET_KEY", (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Token inválido ou expirado" });
    }
    req.user = decoded; // guardar dados do usuário
    next();
  });
};

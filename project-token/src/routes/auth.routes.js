import { Router } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const router = Router();

// simulação de BD (em produção usarias Prisma ou Sequelize)
const fakeUser = {
  id: 1,
  email: "user@email.com",
  password: bcrypt.hashSync("123456", 8), // senha encriptada
};

// rota de login
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email !== fakeUser.email) {
    return res.status(401).json({ error: "Email não encontrado" });
  }

  const passwordIsValid = bcrypt.compareSync(password, fakeUser.password);
  if (!passwordIsValid) {
    return res.status(401).json({ error: "Senha incorreta" });
  }

  // gerar token JWT
  const token = jwt.sign(
    { id: fakeUser.id, email: fakeUser.email },
    "SECRET_KEY", // chave secreta (em produção usar variável de ambiente)
    { expiresIn: "1h" }
  );

  res.json({ token });
});

import { verifyToken } from "../middlewares/auth.middleware.js";

router.get("/profile", verifyToken, (req, res) => {
  res.json({
    message: "Acesso autorizado ✅",
    user: req.user,
  });
});

export default router;

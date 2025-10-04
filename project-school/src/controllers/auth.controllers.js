import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import jwtConfig from "../config/jwt.config.js";
import { login } from "../services/auth.service.js";

export const authLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await login(email);

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Credenciais inválidas" });
    }

    const token = jwt.sign({ id: user.id }, jwtConfig.secret, {
      expiresIn: jwtConfig.expiresIn,
    });

    res.json({
      accessToken: token,
      tokenType: "Bearer",
      expiresIn: jwtConfig.expiresIn,
      user: { id: user.id, email: user.email, name: user.name },
    });
  } catch (error) {
    res.status(500).json({ error: "Erro no servidor. Tente novamente." });
  }
};

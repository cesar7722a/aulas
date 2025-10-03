import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
// import { login } from "../services/auth.service.js";
import jwtConfig from "../config/jwt.config.js";
import { login } from "../services/auth.service.js";

export const authLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await login(email);

    // !user || !bcrypt.compareSync(password, user.password)

    if (user.password !== password) {
      return res.status(401).json({ error: "Credencias inválidas" });
    }

    const token = jwt.sign({ id: user.id }, jwtConfig.secret, {
      expiresIn: jwtConfig.expiresIn,
    });

    res.json({
      token,
      user: { id: user.id, email: user.email, name: user.name },
    });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

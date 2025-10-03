import express from "express";
import cors from "cors";
import morgan from "morgan";
import { logger } from "./middleware/logger.js";
import { auth } from "./middleware/auth.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();
const PORT = 4000;

// Middlewares globais
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(logger);

// Rotas públicas
app.get("/", (req, res) => {
  res.send("Bem-vindo à API com middlewares!");
});

app.get("/livros", (req, res) => {
  res.json([
    { id: 1, titulo: "Livro A" },
    { id: 2, titulo: "Livro B" },
  ]);
});

// Rotas protegidas
app.get("/dashboard", auth, (req, res) => {
  res.send("Painel do usuário protegido ✅");
});

// Middleware de erro (deve estar no final)
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});

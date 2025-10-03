import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

// rotas de autenticação
app.use("/api/auth", authRoutes);

app.get("/", (_, res) => {
  res.send("Servidor rodando 🚀");
});

app.listen(3000, () => console.log("Servidor na porta 3000"));

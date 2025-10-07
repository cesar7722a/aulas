import express from "express";
import cors from "cors";

const app = express();

// Configuração básica - permite todos os domínios
app.use(cors());

// Exemplo mais seguro - permite apenas um domínio específico
// app.use(cors({ origin: "http://localhost:3000" }));

app.get("/api", (req, res) => {
  res.json({ message: "CORS está a funcionar 🚀" });
});

app.listen(5000, () => {
  console.log("Servidor a correr na porta 5000");
});

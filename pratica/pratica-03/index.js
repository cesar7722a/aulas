import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("O server esta rodar");
});

app.post("/alunos", async (req, res) => {
  const newAluno = req.body;
  try {
    const aluno = await prisma.aluno.create({
      data: { nome: newAluno.nome, email: newAluno.email },
    });
    res.json({ aluno });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(3333, () => {
  console.log("O server esta a rodar na porta 3333");
});

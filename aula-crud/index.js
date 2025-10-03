import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(express.json()); // permite receber JSON no body

app.get("/", (req, res) => {
  res.send("API Node.js + Prisma + MySQL 🚀");
});

app.post("/users", async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await prisma.user.create({
      data: { name, email },
    });

    res.json(user);
  } catch (error) {
    res.status(400).json({ error: "Erro ao criar user" });
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "users nao encontrado" });
  }
});

app.get("/users/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: { id: Number(id) },
    });

    if (!user) {
      return res.status(404).json({ error: "user nao encontrado" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    const user = await prisma.user.update({
      where: { id: Number(id) },
      data: { name, email },
    });

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/users/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const user = await prisma.user.delete({
      where: { id: Number(id) },
    });

    res.json({ message: "Usuário apagado com sucesso", user });
  } catch (error) {
    res.status(404).json({ error: "Usuário não encontrado" });
  }
});

app.listen(3333, () => {
  console.log("O servidor está rodando na porta 3333!");
});

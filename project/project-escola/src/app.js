import express from "express";
import { PrismaClient } from "../generated/prisma/app.js";
import cors from "cors";

const app = express();
const prisma = new PrismaClient();

app.use(cors());

app.use(express.json());

app.get("/", (_, res) => {
  res.send("O server esta fine e na porta 3333");
});

// rota alunos
// app.post("/alunos", async (req, res) => {
//   const { nome, email } = req.body;
//   try {
//     const aluno = await prisma.aluno.create({
//       data: { nome, email },
//     });
//     res.json(aluno);
//   } catch (error) {
//     res.status(404).json({ error: error.message });
//   }
// });

// app.get("/alunos", async (_, res) => {
//   try {
//     const alunos = await prisma.aluno.findMany();
//     res.json(alunos);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// app.get("/alunos/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     const aluno = await prisma.aluno.findUnique({
//       where: { id: String(id) },
//     });
//     res.json(aluno);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// function filterBody(body, todosCampos) {
//   const filtered = {};
//   todosCampos.map((field) => {
//     if (body[field] !== undefined) {
//       filtered[field] = body[field];
//     }
//   });
//   return filtered;
// }
// app.put("/alunos/:id", async (req, res) => {
//   const { id } = req.params;
//   const todosCampos = ["nome", "email"];

//   try {
//     const data = filterBody(req.body, todosCampos);

//     if (Object.keys(data).length === 0) {
//       return res.status(400).json({ error: "Nenhum campo válido fornecido" });
//     }

//     const aluno = await prisma.aluno.update({
//       where: { id: String(id) },
//       data,
//     });
//     res.json(aluno);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log("O server está rodar na porta:3333");
});

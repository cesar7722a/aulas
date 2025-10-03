import express from "express";
import { PrismaClient } from "./generated/prisma/index.js";
import cors from "cors";

const app = express();
const prisma = new PrismaClient();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("O server esta fine e na porta 3333");
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log("O server está rodar na porta:3333");
});

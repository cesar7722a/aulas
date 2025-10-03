import { Router } from "express";
import alunoRouter from "./alunos.routes.js";
const router = Router();

router.use("/alunos", alunoRouter);

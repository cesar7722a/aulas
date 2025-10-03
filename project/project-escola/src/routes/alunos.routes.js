import express from "express";
import { getAlunos } from "../controllers/alunos.controllers";

const router = express.Router();
router.get("/", getAlunos);

export default router;

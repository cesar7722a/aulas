import express from "express";
import {
  createAlunos,
  deleteOneStudent,
  getAllAlunos,
  getOneAluno,
  update,
} from "../controllers/alunos.controllers.js";

const router = express.Router();

router.get("/", getAllAlunos);
router.get("/:id", getOneAluno);
router.post("/", createAlunos);
router.put("/:id", update);
router.delete("/", deleteOneStudent);

export default router;

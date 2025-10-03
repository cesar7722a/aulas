import express from "express";
import {
  createOneTeacher,
  deleteOneTeacher,
  getOneTeacher,
  getTeachers,
  updateOneTeachers,
} from "../controllers/teacher.controllers.js";

const router = express.Router();

router.post("/", createOneTeacher);
router.get("/", getTeachers);
router.get("/:id", getOneTeacher);
router.put("/:id", updateOneTeachers);
router.delete("/", deleteOneTeacher);

export default router;

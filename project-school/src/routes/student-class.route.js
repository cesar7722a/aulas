import express from "express";
import {
  getDetailsByCourse,
  getStudentByCourse,
  insertOneStudent,
} from "../controllers/student-class.controllers.js";

const router = express.Router();

router.put("/", insertOneStudent);
router.get("/:id", getStudentByCourse);
router.get("/:id/datails", getDetailsByCourse);

export default router;

import express from "express";
import {
  createOneCourse,
  deleteOneCourse,
  getCourse,
  getOneCourse,
  updateOneCourse,
} from "../controllers/course.controllers.js";

const router = express.Router();
router.post("/", createOneCourse);
router.get("/", getCourse);
router.get("/:id", getOneCourse);
router.put("/:id", updateOneCourse);
router.delete("/", deleteOneCourse);

export default router;

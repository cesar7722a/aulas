import express from "express";
import {
  createOneClass,
  deleteOneClass,
  getClasses,
  getOneClass,
  updateOneclass,
} from "../controllers/class.controllers.js";

const router = express.Router();
router.post("/", createOneClass);
router.get("/", getClasses);
router.get("/:id", getOneClass);
router.put("/:id", updateOneclass);
router.delete("/", deleteOneClass);
export default router;

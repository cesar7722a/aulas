import express from "express";
import {
  addNewUser,
  deleteOneUser,
  getOneUser,
  getUser,
  updateOneUser,
} from "../controllers/user.controllers.js";

const router = express.Router();
router.post("/", addNewUser);
router.get("/", getUser);
router.get("/:id", getOneUser);
router.put("/:id", updateOneUser);
router.delete("/", deleteOneUser);
export default router;

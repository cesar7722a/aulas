import express from "express";
import { authLogin } from "../controllers/auth.controllers.js";

const router = express.Router();

router.post("/", authLogin);

export default router;

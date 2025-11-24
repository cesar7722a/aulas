import { Router } from "express";
import routeUser from "./user.route";

const router = Router();
router.use("/user", routeUser);

export default router;

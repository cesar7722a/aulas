import { Router } from "express";
import alunoRoute from "./alunos.routes.js";
import teacherRoute from "./teacher.routes.js";
import classesRoute from "./class.routes.js";
import courseRoute from "./course.route.js";
import studentCourseRoute from "./student-class.route.js";
import userRoute from "./user.route.js";
import userLogin from "./auth.routes.js";

const router = Router();

router.use("/alunos", alunoRoute);
router.use("/teachers", teacherRoute);
router.use("/class", classesRoute);
router.use("/course", courseRoute);
router.use("/student-course", studentCourseRoute);
router.use("/user", userRoute);
router.use("/login", userLogin);

export default router;

import {
  createTeacher,
  deleteTeacher,
  findOneTeacher,
  findTeachers,
  updateTeacher,
} from "../services/teacher.services.js";
import { deleteUser } from "../services/user.service.js";

export const createOneTeacher = async (req, res) => {
  try {
    const newTeacher = await createTeacher(req.body);
    res.json(newTeacher);
  } catch (error) {
    res.status(500).json({ error: "failed to create teacher" });
  }
};

export const getTeachers = async (_, res) => {
  try {
    const teachers = await findTeachers();
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ error: "failed to find teachers" });
  }
};

export const getOneTeacher = async (req, res) => {
  const { id } = req.params;
  try {
    const oneTeacher = await findOneTeacher(id);
    res.json(oneTeacher);
  } catch (error) {
    res.status(500).json({ error: "failed to find teacher" });
  }
};

export const deleteOneTeacher = async (req, res) => {
  const { id } = req.body;
  try {
    const teacher = await deleteTeacher(id);
    res.json({ teacher }, "teacher delete with succes");
  } catch (error) {
    res.status(500).json({ error: "failed to delete teacher" });
  }
};

export const updateOneTeachers = async (req, res) => {
  const { id } = req.params;
  const allFields = ["nome", "email"];
  try {
    const newBodies = filterFields(req.body, allFields);
    if (Object.keys(newBodies).length === 0) {
      res.status(400).json({ error: "No valid fields provided" });
    }
    const teacher = await updateTeacher(id, newBodies);
    res.json(teacher);
  } catch (error) {
    res.status(400).json({ error: "failed to update teacher" });
  }
};

function filterFields(body, allFields) {
  const filtered = {};
  allFields.map((field) => {
    if (allFields !== undefined) {
      filtered[field] = body[field];
    }
  });
  return filtered;
}

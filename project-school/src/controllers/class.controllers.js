import {
  createClass,
  deleteClasses,
  findClasses,
  findOneClass,
  updateClass,
} from "../services/class.service.js";

export const getClasses = async (_, res) => {
  try {
    const findclasses = await findClasses();
    res.json(findclasses);
  } catch (error) {
    res.status(500).json({ error: "failed to find classes" });
  }
};

export const getOneClass = async (req, res) => {
  const { id } = req.params;
  try {
    const findclass = await findOneClass(id);
    res.json(findclass);
  } catch (error) {
    res.status(500).json({ error: "failed to find class" });
  }
};

export const createOneClass = async (req, res) => {
  try {
    const newClass = await createClass(req.body);
    res.json(newClass);
  } catch (error) {
    res.status(400).json({ error: "failed to create class" });
  }
};

export const updateOneclass = async (req, res) => {
  const { id } = req.params;
  const allFields = ["tema", "duracao", "professorId", "cursoId"];
  try {
    const newBodies = filterFields(req.body, allFields);

    if (Object.keys(newBodies).length === 0) {
      res.status(500).json({ error: "failed no field find" });
    }

    const newClass = await updateClass(id, newBodies);

    res.json(newClass);
  } catch (error) {
    res.status(500).json({ error: "failed to update class" });
  }
};

export const deleteOneClass = async (req, res) => {
  const { id } = req.body;
  try {
    const classDelete = await deleteClasses(id);
    res.json(classDelete);
  } catch (error) {
    res.status(500).json({ error: "failet to delete class" });
  }
};

function filterFields(body, allfields) {
  const filtered = {};
  allfields.map((field) => {
    if (allfields !== undefined) {
      filtered[field] = body[field];
    }
  });
  return filtered;
}

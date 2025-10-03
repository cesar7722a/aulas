import {
  createAluno,
  deleteStudent,
  findAlunos,
  findOneAluno,
  updateStudent,
} from "../services/alunos.service.js";

export const getAllAlunos = async (_, res) => {
  try {
    const alunos = await findAlunos();
    res.json(alunos);
  } catch (error) {
    res.status(500).json({ error: "Erro ao busacr alunos" });
  }
};

export const getOneAluno = async (req, res) => {
  const { id } = req.params;
  try {
    const aluno = await findOneAluno(id);
    res.json(aluno);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createAlunos = async (req, res) => {
  const { nome, email } = req.body;
  try {
    const newAluno = await createAluno(nome, email);
    res.json(newAluno);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar usuário" });
  }
};

export const deleteOneStudent = async (req, res) => {
  const { id } = req.body;
  try {
    const student = await deleteStudent(id);
    res.json(student, "Student deleting with succes");
  } catch (error) {
    res.status(500).json({ error: "failed to delete student" });
  }
};

export const update = async (req, res) => {
  const { id } = req.params;
  const allFields = ["nome", "email"];

  try {
    const newBodies = filterFields(req.body, allFields);

    if (Object.keys(newBodies).length === 0) {
      res.status(400).json({ error: "Nenhum campo válido fornecido" });
    }
    const newAluno = await updateStudent(id, newBodies);
    res.json(newAluno);
  } catch (error) {
    res.status(400).json({ error: error.message });
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

import { findAllAlunos } from "../services/alunos.services";

export const getAlunos = async (req, res) => {
  try {
    const alunos = await findAllAlunos();
    res.json(alunos);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar usuários" });
  }
};

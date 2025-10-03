import prisma from "../libs/prisma.js";

export const findAlunos = async () => {
  return await prisma.aluno.findMany();
};

export const createAluno = async (nome, email) => {
  return await prisma.aluno.create({
    data: { nome, email },
  });
};

export const findOneAluno = async (id) => {
  return await prisma.aluno.findUnique({
    where: { id: String(id) },
  });
};

export const updateStudent = async (id, body) => {
  return await prisma.aluno.update({
    where: { id: String(id) },
    data: body,
  });
};

export const deleteStudent = async (id) => {
  return await prisma.aluno.delete({ where: { id: String(id) } });
};

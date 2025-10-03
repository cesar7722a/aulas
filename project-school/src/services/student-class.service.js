import prisma from "../libs/prisma.js";

export const incertStudentClass = async (alunoId, cursoId) => {
  return await prisma.curso.update({
    where: { id: String(cursoId) },
    data: {
      aluno: {
        connect: { id: String(alunoId) },
      },
    },
    include: { aluno: true },
  });
};

export const findStudentInCourse = async (idCourse) => {
  return prisma.curso.findUnique({
    where: { id: String(idCourse) },
    include: { aluno: true },
  });
};

export const detailsByCourse = async (idcourse) => {
  return prisma.curso.findUnique({
    where: { id: String(idcourse) },
    include: {
      aluno: true,
      aula: {
        include: {
          professor: true,
          aluno: true,
        },
      },
    },
  });
};

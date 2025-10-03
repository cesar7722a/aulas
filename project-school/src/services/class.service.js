import prisma from "../libs/prisma.js";

export const createClass = async (body) => {
  return await prisma.aula.create({
    data: {
      tema: body.tema,
      duracao: body.duracao,
      professor: {
        connect: { id: body.professorId },
      },
      curso: {
        connect: { id: body.cursoId },
      },
    },
  });
};

export const findOneClass = async (id) => {
  return await prisma.aula.findUnique({
    where: { id: String(id) },
  });
};

export const findClasses = async () => {
  return await prisma.aula.findMany();
};

export const updateClass = async (id, body) => {
  return await prisma.aula.update({
    where: { id: String(id) },
    data: body,
  });
};

export const deleteClasses = async (id) => {
  return await prisma.aula.delete({
    where: { id: String(id) },
  });
};

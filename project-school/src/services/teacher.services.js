import prisma from "../libs/prisma.js";

export const createTeacher = async (body) => {
  return await prisma.professor.create({
    data: body,
  });
};

export const findTeachers = async () => {
  return await prisma.professor.findMany();
};

export const findOneTeacher = async (id) => {
  return await prisma.professor.findUnique({
    where: { id: String(id) },
  });
};

export const updateTeacher = async (id, body) => {
  return await prisma.professor.update({
    where: { id: String(id) },
    data: body,
  });
};

export const deleteTeacher = async (id) => {
  return await prisma.professor.delete({
    where: { id: String(id) },
  });
};

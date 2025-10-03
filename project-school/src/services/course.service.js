import prisma from "../libs/prisma.js";

export const createCourse = async (body) => {
  return await prisma.curso.create({
    data: body,
  });
};

export const findCourse = async () => {
  return await prisma.curso.findMany();
};

export const findOneCourse = async (id) => {
  return await prisma.curso.findUnique({
    where: { id: String(id) },
  });
};

export const updateCourse = async (id, body) => {
  return await prisma.curso.update({
    where: { id: String(id) },
    data: body,
  });
};

export const deleteCourse = async (id) => {
  return await prisma.curso.delete({
    where: { id: String(id) },
  });
};

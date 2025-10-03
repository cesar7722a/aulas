import prisma from "../libs/prisma.js";

export const createUser = async (body) => {
  return await prisma.user.create({
    data: body,
  });
};

export const findUser = async () => {
  return await prisma.user.findMany();
};

export const findOneUser = async (id) => {
  return await prisma.user.findUnique({
    where: { id: String(id) },
  });
};

export const updateUser = async (id, body) => {
  return await prisma.user.update({
    where: { id: String(id) },
    data: body,
  });
};

export const deleteUser = async (id) => {
  return await prisma.user.delete({
    where: { id: String(id) },
  });
};

import prisma from "../libs/prisma.js";
import bcrypt from "bcryptjs";

export const createUser = async (body) => {
  const password = bcrypt.hashSync(body.password, 10);
  const email = body.email;
  const nome = body.nome;
  return await prisma.user.create({
    data: { nome, email, password },
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

import prisma from "../libs/prisma.js";

export const login = async (email) => {
  return await prisma.user.findUnique({
    where: { email },
  });
};

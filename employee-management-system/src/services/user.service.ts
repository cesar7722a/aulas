import { userProps } from "../../types/user";
import { prisma } from "../libs/client";

export const createUser = async (body: userProps) => {
  return await prisma.user.create({
    data: body,
  });
};

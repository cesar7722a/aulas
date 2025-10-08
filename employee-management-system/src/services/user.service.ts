import { userProps } from "../../types/user";
import { prisma } from "../libs/client";

export const createUser = (body: userProps) => {
  return prisma.user.create({
    data: body,
  });
};

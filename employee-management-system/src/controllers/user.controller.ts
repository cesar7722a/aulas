import { createUser } from "../services/user.service";

export const createNewUser = async (require: any, response: any) => {
  const { body } = require.body;
  try {
    const user = await createUser(body);
    response.json(user);
  } catch (error: any) {
    response.status(401).json({
      message: "Failet to create user",
      error: error.message,
    });
  }
};

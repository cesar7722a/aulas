import {
  createUser,
  deleteUser,
  findOneUser,
  findUser,
  updateUser,
} from "../services/user.service.js";

export const addNewUser = async (req, res) => {
  try {
    const newUser = await createUser(req.body);
    res.json({
      message: "User created with succes",
      data: newUser,
    });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

export const getUser = async (_, res) => {
  try {
    const allUser = await findUser();
    res.json({
      message: "All user in app",
      data: allUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "failet to find all user",
      error: error.message,
    });
  }
};

export const getOneUser = async (req, res) => {
  const { id } = req.params;
  try {
    const oneUser = await findOneUser(id);
    res.json({
      message: "User finded",
      data: oneUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "failet to find user",
      error: error.message,
    });
  }
};

export const updateOneUser = async (req, res) => {
  const { id } = req.params;
  const allFields = ["nome", "email", "password"];
  try {
    const updatedUser = filterFields(req.body, allFields);
    if (Object.keys(updatedUser).length === 0) {
      res.status(400).json({ error: "No valid fields provided" });
    }

    const newUser = await updateUser(id, req.body);
    res.json({
      message: "Updated user succes",
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "failet to update user",
      error: error.message,
    });
  }
};

function filterFields(body, allFields) {
  const filtered = {};
  allFields.map((field) => {
    if (allFields !== undefined) {
      filtered[field] = body[field];
    }
  });
  return filtered;
}

export const deleteOneUser = async (req, res) => {
  const { id } = req.body;
  try {
    const userDelete = await deleteUser(id);
    res.json({
      message: "User deleted with succes",
      data: userDelete,
    });
  } catch (error) {
    res.status(500).json({
      message: "failet to delete user",
      error: error.message,
    });
  }
};

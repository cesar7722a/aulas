import {
  createCourse,
  deleteCourse,
  findCourse,
  findOneCourse,
  updateCourse,
} from "../services/course.service.js";

export const createOneCourse = async (req, res) => {
  try {
    const newCourse = await createCourse(req.body);
    res.json(newCourse);
  } catch (error) {
    res.status(400).json({ error: "failed to create new course" });
  }
};

export const getCourse = async (_, res) => {
  try {
    const getAllcourse = await findCourse();
    res.json(getAllcourse);
  } catch (error) {
    res.status(500).json({ error: "failet to find course" });
  }
};

export const getOneCourse = async (req, res) => {
  const { id } = req.params;
  try {
    const oneCourse = await findOneCourse(id);
    res.json(oneCourse);
  } catch (error) {
    res.status(500).json({ error: "failet to find course" });
  }
};

export const updateOneCourse = async (req, res) => {
  const { id } = req.params;
  try {
    const newData = await updateCourse(id, req.body);
    res.json(newData);
  } catch (error) {
    res.status(500).json({ error: "failet to update course" });
  }
};

export const deleteOneCourse = async (req, res) => {
  const { id } = req.body;
  try {
    const response = await deleteCourse(id);
    res.json({
      message: "course delete with success",
      data: response,
    });
  } catch (error) {
    res.status(400).json({ error: "failet to delete course" });
  }
};

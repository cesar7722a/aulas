import {
  detailsByCourse,
  findStudentInCourse,
  incertStudentClass,
} from "../services/student-class.service.js";

export const insertOneStudent = async (req, res) => {
  const { alunoId, cursoId } = req.body;
  try {
    const updateCourse = await incertStudentClass(alunoId, cursoId);
    res.json({
      message: "Student add with succes",
      data: updateCourse,
    });
  } catch (error) {
    res.status(500).json({
      message: "failet to add student in course",
      error: error.message,
    });
  }
};

export const getStudentByCourse = async (req, res) => {
  const { id } = req.params;
  try {
    const course = await findStudentInCourse(id);

    if (!course) {
      res.status(404).json({ message: "Course not find" });
    }

    res.json({
      message: "Student in course are",
      data: course,
    });
  } catch (error) {
    res
      .status(404)
      .json({ message: "failet to find course", error: error.message });
  }
};

export const getDetailsByCourse = async (req, res) => {
  const { id } = req.params;
  try {
    const detail = await detailsByCourse(id);

    if (!detail) {
      res.status(404).json({ message: " failet to find details of Course" });
    }

    res.json({
      message: "Details for course",
      data: detail,
    });
  } catch (error) {
    res.status(404).json({
      error: error.message,
    });
  }
};

import axios from "axios";
// CRUD
// fetch all the courses
export const fetchCourses = async () => {
  const response = await axios.get("http://localhost:4000/api/courses");
  return response.data;
};

export const fetchCourseById = async (id?: string) => {
  const response = await axios.get(`http://localhost:4000/api/courses/${id}`);
  return response.data;
};

export const fetchModulesForCourse = async (id?: string) => {
  const response = await axios.get(
    `http://localhost:4000/api/courses/${id}/modules`
  );
  return response.data;
};

export const createCourse = async (course: any) => {
  const response = await axios.post(
    "http://localhost:4000/api/courses",
    course
  );
  return response.data;
};

export const deleteCourse = async (id: string) => {
  const response = await axios.delete(
    `http://localhost:4000/api/courses/${id}`
  );
  return response.data;
};

// fetch a single course
// create a course
// update a course
// delete a course

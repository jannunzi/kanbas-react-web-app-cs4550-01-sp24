import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router";
// import courses from "../Database/courses.json";
// import modules from "../Database/modules.json";
import * as client from "./client";

function Courses() {
  const { pathname } = useLocation();
  const params = useParams();
  const { courseId } = params;
  const [course, setCourse] = useState({ name: "" }); //= courses.find((course) => course._id === courseId);
  const [modulesForThisCourse, setModulesForThisCourse] = useState([]);
  const fetchCourse = async () => {
    const course = await client.fetchCourseById(courseId);
    setCourse(course);
  };
  const fetchModulesForThisCourse = async () => {
    const modules = await client.fetchModulesForCourse(courseId);
    setModulesForThisCourse(modules);
  };
  useEffect(() => {
    fetchCourse();
    fetchModulesForThisCourse();
  }, [courseId]);
  return (
    <div>
      <h1>Courses Component {course?.name}</h1>
      <pre>
        <code>{JSON.stringify(modulesForThisCourse, null, 2)}</code>
      </pre>
    </div>
  );
}

export default Courses;

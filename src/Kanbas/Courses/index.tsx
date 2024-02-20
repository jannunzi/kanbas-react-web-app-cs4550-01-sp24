import React from "react";
import { useLocation, useParams } from "react-router";
// import courses from "../Database/courses.json";
import modules from "../Database/modules.json";
import ModuleList from "./Modules/ModuleList";

function Courses({ courses }: { courses: any[] }) {
  const { pathname } = useLocation();
  const params = useParams();
  const { courseId } = params;
  const course = courses.find((course) => course._id === courseId);
  const modulesForThisCourse = modules.filter(
    (module) => module.course === courseId
  );
  return (
    <div>
      <h1>Courses Component {course?.name}</h1>
      <ModuleList />
      <pre>
        <code>{JSON.stringify(modulesForThisCourse, null, 2)}</code>
      </pre>
    </div>
  );
}

export default Courses;

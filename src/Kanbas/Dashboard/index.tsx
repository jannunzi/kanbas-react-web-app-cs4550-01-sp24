import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as client from "../Courses/client";

function Dashboard() {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({} as any);
  const fetchCourses = async () => {
    const courses = await client.fetchCourses();
    setCourses(courses);
  };
  const createCourse = async () => {
    const courses = await client.createCourse(course);
    setCourses(courses);
  };
  const deleteCourse = async (id: string) => {
    const courses = await client.deleteCourse(id);
    setCourses(courses);
  };

  useEffect(() => {
    fetchCourses();
  }, []);
  return (
    <div className="p-4">
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses (12)</h2>
      <hr />
      <input
        type="text"
        value={course.name}
        className="form-control"
        placeholder="New Course Name"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <button onClick={createCourse}>Add</button>
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course: any) => (
            <div className="col" style={{ width: "300px" }}>
              <div className="card">
                <img
                  src="/images/reactjs.jpg"
                  className="card-img-top"
                  style={{ maxHeight: "150px" }}
                />
                <div className="card-body">
                  <Link
                    className="card-title"
                    to={`/Kanbas/Courses/${course._id}`}
                    style={{
                      textDecoration: "none",
                      color: "navy",
                      fontWeight: "bold",
                    }}
                  >
                    {course.name}
                  </Link>
                  <p className="card-text">Full Stack software developer</p>
                  <button
                    onClick={() => deleteCourse(course._id)}
                    className="btn btn-danger float-end"
                  >
                    Delete
                  </button>
                  <Link to="#" className="btn btn-primary">
                    {" "}
                    Go{" "}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <pre>
        <code>{JSON.stringify(courses, null, 2)}</code>
      </pre>
    </div>
  );
}

export default Dashboard;

import React, { useState } from "react";
import { useParams } from "react-router";
import { modules } from "../../Database";
import "./index.css";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();
  //   const [modulesList, setModuleList] = useState(modules);
  //   const [module, setModule] = useState({
  //     _id: "0",
  //     name: "New Module",
  //     description: "New Description",
  //     course: courseId || "",
  //   });
  //   const addModule = (module: any) => {
  //     const newModule = { ...module, _id: new Date().getTime().toString() };
  //     const newModuleList = [newModule, ...modulesList];
  //     setModuleList(newModuleList);
  //   };
  //   const deleteModule = (moduleId: string) => {
  //     const newModuleList = modulesList.filter(
  //       (module) => module._id !== moduleId
  //     );
  //     setModuleList(newModuleList);
  //   };
  //   const updateModule = () => {
  //     const newModuleList = modulesList.map((m) => {
  //       if (m._id === module._id) {
  //         return module;
  //       } else {
  //         return m;
  //       }
  //     });
  //     setModuleList(newModuleList);
  //   };
  const modulesList = useSelector(
    (state: KanbasState) => state.modulesReducer.modules
  );
  const module = useSelector(
    (state: KanbasState) => state.modulesReducer.module
  );
  const dispatch = useDispatch();

  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
    <>
      {modulesList.length}
      <pre>
        <code>{JSON.stringify(module, null, 2)}</code>
      </pre>
      {/* <!-- Add buttons here --> */}
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <button
              onClick={() =>
                dispatch(addModule({ ...module, course: courseId }))
              }
            >
              Add
            </button>
            <button onClick={() => dispatch(updateModule(module))}>
              Update
            </button>

            <input
              value={module.name}
              onChange={(e) =>
                dispatch(setModule({ ...module, name: e.target.value }))
              }
            />
          </div>
          <textarea
            value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }
          />
        </li>

        {modulesList
          .filter((module) => module.course === courseId)
          .map((module) => (
            <li
              key={module._id}
              className="list-group-item"
              onClick={() => setSelectedModule(module)}
            >
              <div>
                <FaEllipsisV className="me-2" />
                {module.name}
                <button onClick={() => dispatch(setModule(module))}>
                  Edit
                </button>
                <button onClick={() => dispatch(deleteModule(module._id))}>
                  Delete
                </button>

                <span className="float-end">
                  <FaCheckCircle className="text-success" />
                  <FaPlusCircle className="ms-2" />
                  <FaEllipsisV className="ms-2" />
                </span>
              </div>
              {selectedModule._id === module._id && (
                <ul className="list-group">
                  {module.lessons?.map((lesson: any) => (
                    <li key={lesson._id} className="list-group-item">
                      <FaEllipsisV className="me-2" />
                      {lesson.name}
                      <span className="float-end">
                        <FaCheckCircle className="text-success" />
                        <FaEllipsisV className="ms-2" />
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </>
  );
}
export default ModuleList;

import { useSelector } from "react-redux";
import { LabState } from "../store";
import { deleteTodo, addTodo, setTodo } from "./todosReducer";
import { useDispatch } from "react-redux";

function TodoList() {
  const { todos, todo } = useSelector((store: LabState) => store.todosReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Todo List</h1>
      <ul className="list-group">
        <li className="list-group-item">
          <button
            onClick={() => dispatch(addTodo(todo))}
            className="btn btn-success float-end"
          >
            Add
          </button>
          <input
            onChange={(e) =>
              dispatch(setTodo({ ...todo, title: e.target.value }))
            }
            className="form-control w-50"
            value={todo.title}
          />
        </li>
        {todos.map((todo, index) => (
          <li className="list-group-item" key={index}>
            {todo.title}
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className="btn btn-danger float-end"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

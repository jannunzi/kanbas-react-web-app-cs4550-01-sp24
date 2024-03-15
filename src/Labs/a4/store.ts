import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterRedux/counterReducer";
import todosReducer from "./Todo/todosReducer";
export interface LabState {
  counterReducer: {
    count: number;
  };
  todosReducer: {
    todos: { id: string; title: string }[];
    todo: { title: string };
  };
}
const store = configureStore({
  reducer: {
    counterReducer,
    todosReducer,
  },
});
export default store;

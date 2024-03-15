import { useSelector } from "react-redux";
import { LabState } from "../store";
import { increment, decrement, reset } from "./counterReducer";
import { useDispatch } from "react-redux";

function CounterRedux() {
  const count = useSelector((store: LabState) => store.counterReducer.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter Redux</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment(10))}>Increment</button>
      <button onClick={() => dispatch(decrement(20))}>Decrement</button>
      <button>Reset</button>
    </div>
  );
}

export default CounterRedux;

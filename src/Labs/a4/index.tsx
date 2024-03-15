import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import EventObject from "./EventObject";
import ObjectStateVariable from "./ObjectStateVariable";
import PassingFunctions from "./PassingFunctions";
import StringStateVariables from "./StringStateVariables";

import { useState } from "react";
import CounterRedux from "./CounterRedux";
import TodoList from "./Todo/TodoList";
import Fibonacci from "./Fibonacci";
import ObjectComponent from "./Object";
function Assignment4() {
  function sayHello() {
    alert("Hello");
  }

  let [count, qwer] = useState(7);

  return (
    <div>
      <h2>Assignment 4</h2>
      <ObjectComponent />
      <Fibonacci />
      <TodoList />
      <ObjectStateVariable count={count} />
      <StringStateVariables />
      <BooleanStateVariables />
      <CounterRedux />
      <Counter count={count} qwer={qwer} />
      <EventObject />
      <PassingFunctions theFunction={sayHello} />
      <ClickEvent />
    </div>
  );
}

export default Assignment4;

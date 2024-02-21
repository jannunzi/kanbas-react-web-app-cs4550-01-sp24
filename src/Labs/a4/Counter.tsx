import React, { useState } from "react";
function Counter() {
  let [count, qwer] = useState(7);
  console.log(count);
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button
        onClick={() => {
          //   count++;
          qwer(count + 1);
          console.log(count);
        }}
      >
        Up
      </button>
      <button
        onClick={() => {
          //   count--;
          qwer(count - 1);
          console.log(count);
        }}
      >
        Down
      </button>
    </div>
  );
}
export default Counter;

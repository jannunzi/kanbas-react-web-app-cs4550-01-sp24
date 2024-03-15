import React, { useState } from "react";
function Counter({
  count,
  qwer,
}: {
  count: number;
  qwer: (count: number) => void;
}) {
  console.log(count);
  return (
    <div>
      <h2>Regular Counter: {count}</h2>
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

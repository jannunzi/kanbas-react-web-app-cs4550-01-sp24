import React, { useState } from "react";
function ObjectComponent() {
  const [q, p] = useState({ w: "C", o: 25 });
  const e = () => {
    p({ ...q, w: "K" });
  };
  const u = (r: number) => {
    p({ ...q, o: r });
  };
  return (
    <div>
      <h3>G: {q.w}</h3>
      <h3>Y: {q.o}</h3>
      <button onClick={e}>M</button>
      <button onClick={() => u(30)}>H</button>
    </div>
  );
}

export default ObjectComponent;

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { LabState } from "./store";
function EventObject() {
  const count = useSelector((store: LabState) => store.counterReducer.count);

  const [event, setEvent] = useState(null);
  const handleClick = (e: any) => {
    e.target = e.target.outerHTML;
    delete e.view;
    setEvent(e);
  };
  return (
    <div>
      <h2>Event Object</h2>
      <h3>Count: {count}</h3>
      <button
        id="event-button"
        onClick={(e) => handleClick(e)}
        className="btn btn-primary"
      >
        Display Event Object
      </button>
      <pre>{JSON.stringify(event, null, 2)}</pre>
    </div>
  );
}
export default EventObject;

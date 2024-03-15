import { Route, Routes } from "react-router";
import { Link, Navigate } from "react-router-dom";
import Assignment3 from "./a3";
import Assignment4 from "./a4";
import Assignment5 from "./a5";
import Nav from "../Nav";
import store from "./a4/store";
import { Provider } from "react-redux";

function Labs() {
  return (
    <Provider store={store}>
      <div className="container-fluid">
        <Nav />
        <h1>Labs</h1>
        <Link to="a3">Assignment 3</Link> | <Link to="a4">Assignment 4</Link> |{" "}
        <Link to="a5">Assignment 5</Link> |{" "}
        <Routes>
          {/* <Route path="/" element={<h2>Choose an assignment</h2>} /> */}
          <Route path="/" element={<Navigate to="a3" />} />
          <Route path="/a3" element={<Assignment3 />} />
          <Route path="/a4" element={<Assignment4 />} />
          <Route path="/a5" element={<Assignment5 />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default Labs;

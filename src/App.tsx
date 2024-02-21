import React from "react";
import { HashRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import HelloWorld from "./hello";
import Kanbas from "./Kanbas";
import Labs from "./Labs";
import logo from "./logo.svg";
import Nav from "./Nav";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/Labs" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
          <Route path="/hello" element={<HelloWorld />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;

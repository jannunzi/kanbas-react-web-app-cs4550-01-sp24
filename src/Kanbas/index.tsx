import { Routes, Route } from "react-router";
import Account from "./Account";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import KanbasNavigator from "./Navigation";

function Kanbas() {
  return (
    <div className="d-flex">
      <KanbasNavigator />
      <div>
        <Routes>
          <Route path="/Account/*" element={<Account />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Courses/:courseId" element={<Courses />} />
          <Route path="/Calendar" element={<h1>Calendar</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default Kanbas;

import { Routes, Route, Navigate } from "react-router";
import Login from "../../Users/Login";
import Register from "../../Users/Register";
import Profile from "../../Users/Profile";

export default function Account() {
  return (
    <div className="container-fluid">
      <h1>Account</h1>
      <Routes>
        <Route path="/" element={<Navigate to="/Kanbas/Account/Login" />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </div>
  );
}

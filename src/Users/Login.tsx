import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import * as userClient from "./client";

export default function Login() {
  const [user, setUser] = useState({
    username: "johndoe",
    password: "password",
    email: "johndoe@neu.edu",
  });
  const navigate = useNavigate();
  const login = async () => {
    try {
      await userClient.login(user);
      navigate("/Kanbas/Account/Profile");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        value={user.username}
        className="form-control"
        placeholder="Username"
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <input
        type="password"
        value={user.password}
        className="form-control"
        placeholder="Password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button onClick={login}>Login</button>
      <Link to="/Kanbas/Account/Register">Register</Link>
    </div>
  );
}

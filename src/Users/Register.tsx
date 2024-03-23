import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import * as userClient from "./client";

export default function Register() {
  const [user, setUser] = useState({
    username: "johndoe",
    password: "password",
    email: "johndoe@neu.edu",
  });
  const navigate = useNavigate();
  const register = async () => {
    try {
      await userClient.register(user);
      navigate("/Kanbas/Account/Profile");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1>Register</h1>
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
      <button onClick={register}>Register</button>
      <Link to="/Kanbas/Account/Login">Login</Link>
    </div>
  );
}

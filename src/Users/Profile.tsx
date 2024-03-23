import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import * as userClient from "./client";

export default function Profile() {
  const [user, setUser] = useState({
    username: "johndoe",
    password: "password",
    email: "johndoe@neu.edu",
  });
  const fetchProfile = async () => {
    try {
      const profile = await userClient.profile();
      setUser(profile);
    } catch (error) {
      navigate("/Kanbas/Account/Login");
      //   console.error(error);
    }
  };
  const navigate = useNavigate();
  const logout = async () => {
    await userClient.logout();
    navigate("/Kanbas/Account/Login");
  };
  useEffect(() => {
    fetchProfile();
  }, []);
  return (
    <div>
      <h1>Profile</h1>
      <button onClick={logout}>Logout</button>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}

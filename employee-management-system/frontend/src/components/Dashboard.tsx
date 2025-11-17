import React from "react";
import { useAuth } from "../context/AuthContext";

const Dashboard: React.FC = () => {
  const { token, logout } = useAuth();

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Logged in token: {token}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;

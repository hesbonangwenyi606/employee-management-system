import React from "react";
import { useAuth } from "../context/AuthContext";

const Dashboard: React.FC = () => {
  const { token, logout } = useAuth();

  return (
    <div style={{ padding: 20 }}>
      <h2>Dashboard</h2>
      <p>Your token: {token}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;

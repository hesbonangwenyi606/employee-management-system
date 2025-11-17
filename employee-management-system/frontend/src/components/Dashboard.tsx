import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import api, { setToken } from "../api/api";
import EmployeeList from "./EmployeeList";

const Dashboard: React.FC = () => {
  const { token, logout } = useAuth();
  const [employees, setEmployees] = useState<any[]>([]);

  useEffect(() => {
    setToken(token);
    api.get("/employees")
      .then(res => setEmployees(res.data))
      .catch(err => console.error(err));
  }, [token]);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Dashboard</h2>
      <button onClick={logout}>Logout</button>
      <EmployeeList employees={employees} />
    </div>
  );
};

export default Dashboard;

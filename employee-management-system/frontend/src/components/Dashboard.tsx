import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import api, { setToken } from "../api/api";
import EmployeeList from "./EmployeeList";

interface Employee {
  _id: string;
  name: string;
  email: string;
}

const Dashboard: React.FC = () => {
  const { token, logout } = useAuth();
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    setToken(token);
    api.get("/employees")
      .then(res => setEmployees(res.data))
      .catch(err => console.error(err));
  }, [token]);

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <button onClick={logout}>Logout</button>
      <EmployeeList employees={employees} />
    </div>
  );
};

export default Dashboard;

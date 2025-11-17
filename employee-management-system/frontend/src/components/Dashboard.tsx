import React from "react";
import { useAuth } from "../context/AuthContext";

interface Employee {
  id: number;
  name: string;
  department: string;
}

const Dashboard: React.FC = () => {
  const { token, logout } = useAuth();
  const [employees, setEmployees] = React.useState<Employee[]>([
    { id: 1, name: "John Doe", department: "HR" },
    { id: 2, name: "Jane Smith", department: "Engineering" },
  ]);

  if (!token) return <p>Not authorized</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Dashboard</h1>
      <button onClick={logout}>Logout</button>
      <h2>Employees</h2>
      <ul>
        {employees.map((emp) => (
          <li key={emp.id}>
            {emp.name} - {emp.department}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;

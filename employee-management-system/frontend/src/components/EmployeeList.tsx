import React from "react";
import EmployeeForm from "./EmployeeForm";

interface Employee {
  _id: string;
  name: string;
  email: string;
}

interface Props {
  employees: Employee[];
}

const EmployeeList: React.FC<Props> = ({ employees }) => {
  return (
    <div className="employee-list">
      <h3>Employees</h3>
      <EmployeeForm />
      <ul>
        {employees.map(emp => (
          <li key={emp._id}>{emp.name} - {emp.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;

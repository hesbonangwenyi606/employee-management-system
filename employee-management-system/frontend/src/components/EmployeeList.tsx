import React from "react";
import EmployeeForm from "./EmployeeForm";

interface Props {
  employees: any[];
}

const EmployeeList: React.FC<Props> = ({ employees }) => {
  return (
    <div>
      <h3>Employees</h3>
      <EmployeeForm />
      <ul>
        {employees.map(emp => (
          <li key={emp._id}>
            {emp.name} - {emp.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;

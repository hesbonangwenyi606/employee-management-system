import React, { useState } from "react";
import api from "../api/api";

const EmployeeForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post("/employees", { name, email });
      setName("");
      setEmail("");
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="employee-form">
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default EmployeeForm;

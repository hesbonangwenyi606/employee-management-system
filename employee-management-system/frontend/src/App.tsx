import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { useAuth } from "./context/AuthContext";

const App: React.FC = () => {
  const { user } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={user ? "/dashboard" : "/login"} />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={user ? <Dashboard /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App; // ✅ default export

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login: React.FC = () => {
  const { login } = useAuth(); // Uses AuthContext login
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(""); // Reset error

    try {
      await login(email, password); // ✅ Matches AuthContext login
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message || "Invalid credentials");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <button
          type="submit"
          style={{ width: "100%", padding: "10px", background: "#4CAF50", color: "white", border: "none", cursor: "pointer" }}
        >
          Login
        </button>
        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
      </form>
    </div>
  );
};

export default Login;

import React, { createContext, useContext, useState, ReactNode } from "react";

// User type (you can extend this later)
interface User {
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Fake login function
  const login = async (email: string, password: string) => {
    if (email === "admin@example.com" && password === "password") {
      setUser({ email });
      return;
    }
    throw new Error("Invalid credentials");
  };

  // Fake signUp function
  const signUp = async (email: string, password: string) => {
    // In real app, you'd call API here
    setUser({ email });
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, signUp, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};

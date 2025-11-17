import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the context type
interface AuthContextType {
  user: { email: string } | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

// Create the context with proper default values
const AuthContext = createContext<AuthContextType>({
  user: null,
  login: async (email: string, password: string) => false, // accepts 2 args
  logout: () => {},
});

// AuthProvider component
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<{ email: string } | null>(null);

  const login = async (email: string, password: string) => {
    // Here you can replace with real authentication logic
    if (email === "admin@example.com" && password === "password") {
      setUser({ email });
      return true;
    }
    throw new Error("Invalid credentials");
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};

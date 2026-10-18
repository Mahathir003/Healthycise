"use client";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState({
    name: "Mahathir Mahmud Mahi",
    email: "mahathir@gmail.com",
    age: 21,
    gender: "Male",
    height: 170,
    weight: 69.5,
    activityLevel: "Moderately Active",
    dietPreference: "Non-Vegetarian",
    medicalConditions: "None",
    allergies: "None",
    fitnessLevel: "Moderate",
    isLoggedIn: true, // Set to false if you want landing page default
  });

  const login = (email, password) => {
    setUser((prev) => ({ ...prev, isLoggedIn: true, email }));
  };

  const register = (name, email, password) => {
    setUser((prev) => ({ ...prev, isLoggedIn: true, name, email }));
  };

  const logout = () => {
    setUser((prev) => ({ ...prev, isLoggedIn: false }));
  };

  const updateProfile = (updatedData) => {
    setUser((prev) => ({ ...prev, ...updatedData }));
  };

  return (
    <AuthContext.Provider
      value={{ user, login, register, logout, updateProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

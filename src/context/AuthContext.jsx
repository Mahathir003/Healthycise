"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const router = useRouter();

  // Load initial auth state from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("healthycise_user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Failed to parse stored user", e);
      }
    }
  }, []);

  const login = (email, password) => {
    // Mock user login session matching reference data
    const loggedInUser = {
      name:
        email.split("@")[0].replace(".", " ").toUpperCase() ||
        "Mahathir Mahmud Mahi",
      email: email,
      age: 21,
      gender: "Male",
      height: 170, // cm
      weight: 69.5, // kg
      activityLevel: "Moderately Active",
      dietPreference: "Non-Vegetarian",
      medicalConditions: "None",
      allergies: "None",
      fitnessLevel: "Moderate",
      goal: "Keep Fit",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
    };

    setUser(loggedInUser);
    localStorage.setItem("healthycise_user", JSON.stringify(loggedInUser));
    toast.success("Successfully logged in! Welcome back.");
    router.push("/");
  };

  const register = (username, email) => {
    const newUser = {
      name: username,
      email: email,
      age: 21,
      gender: "Male",
      height: 170,
      weight: 70.0,
      activityLevel: "Moderately Active",
      dietPreference: "Non-Vegetarian",
      medicalConditions: "None",
      allergies: "None",
      fitnessLevel: "Moderate",
      goal: "Keep Fit",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
    };

    setUser(newUser);
    localStorage.setItem("healthycise_user", JSON.stringify(newUser));
    toast.success("Account created successfully! Welcome to Healthycise.");
    router.push("/");
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("healthycise_user");
    toast.success("Logged out successfully.");
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

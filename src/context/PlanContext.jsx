"use client";
import { createContext, useContext, useState } from "react";

const PlanContext = createContext();

export function PlanProvider({ children }) {
  const [foodLog, setFoodLog] = useState([
    { id: 1, name: "Chicken Breast", amount: 150, calories: 248 },
    { id: 2, name: "Brown Rice", amount: 100, calories: 111 },
    { id: 3, name: "Broccoli", amount: 150, calories: 51 },
    { id: 4, name: "Banana", amount: 120, calories: 107 },
  ]);

  const [workoutPlan, setWorkoutPlan] = useState({
    today: [
      { id: 1, name: "Full Body Workout", duration: "45 min", calories: 320 },
      { id: 2, name: "Cycling", duration: "25 min", calories: 250 },
    ],
    tomorrow: [
      { id: 3, name: "Upper Body Strength", duration: "40 min", calories: 350 },
      { id: 4, name: "Running", duration: "30 min", calories: 280 },
    ],
  });

  const addFood = (item) => {
    setFoodLog((prev) => [...prev, { ...item, id: Date.now() }]);
  };

  const removeFood = (id) => {
    setFoodLog((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <PlanContext.Provider
      value={{ foodLog, addFood, removeFood, workoutPlan, setWorkoutPlan }}
    >
      {children}
    </PlanContext.Provider>
  );
}

export function usePlan() {
  return useContext(PlanContext);
}

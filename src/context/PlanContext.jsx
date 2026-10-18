"use client";

import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

const PlanContext = createContext();

export function PlanProvider({ children }) {
  const [customPlan, setCustomPlan] = useState({
    goal: "Maintain fitness & build clean muscle",
    targetCalories: 2000,
    waterIntake: "3.5 Liters",
    workoutsPerWeek: 5,
  });

  const updatePlan = (newPlanDetails) => {
    setCustomPlan((prev) => ({ ...prev, ...newPlanDetails }));
    toast.success("Your health plan has been updated successfully!");
  };

  return (
    <PlanContext.Provider value={{ customPlan, updatePlan }}>
      {children}
    </PlanContext.Provider>
  );
}

export function usePlan() {
  return useContext(PlanContext);
}

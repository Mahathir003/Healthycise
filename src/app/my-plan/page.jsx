"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaDumbbell,
  FaUtensils,
  FaCheckCircle,
  FaArrowRight,
  FaFire,
  FaChartLine,
} from "react-icons/fa";

export default function MyPlanPage() {
  const [activeTab, setActiveTab] = useState("workouts");

  const workoutPlan = [
    {
      day: "Monday",
      routine: "Full Body Hypertrophy",
      duration: "45 min",
      burn: "320 kcal",
    },
    {
      day: "Tuesday",
      routine: "HIIT Fat Burner",
      duration: "20 min",
      burn: "280 kcal",
    },
    {
      day: "Wednesday",
      routine: "Active Rest & Core",
      duration: "30 min",
      burn: "150 kcal",
    },
    {
      day: "Thursday",
      routine: "Upper Body Strength",
      duration: "40 min",
      burn: "350 kcal",
    },
    {
      day: "Friday",
      routine: "Outdoor Running & Cardio",
      duration: "30 min",
      burn: "420 kcal",
    },
    {
      day: "Saturday",
      routine: "Lower Body & Legs",
      duration: "45 min",
      burn: "380 kcal",
    },
    {
      day: "Sunday",
      routine: "Rest & Mobility Recovery",
      duration: "15 min",
      burn: "80 kcal",
    },
  ];

  const mealPlan = [
    {
      day: "Monday",
      meal: "Oatmeal & Berries / Grilled Chicken Salad / Salmon Quinoa",
      calories: "1,850 kcal",
    },
    {
      day: "Tuesday",
      meal: "Greek Yogurt Parfait / Turkey Wrap / Lean Beef Stir Fry",
      calories: "1,900 kcal",
    },
    {
      day: "Wednesday",
      meal: "Avocado Toast & Eggs / Quinoa Bowl / Baked Cod & Asparagus",
      calories: "1,750 kcal",
    },
    {
      day: "Thursday",
      meal: "Protein Smoothie / Chicken Caesar Salad / Tofu Curry",
      calories: "1,820 kcal",
    },
    {
      day: "Friday",
      meal: "Chia Seed Pudding / Lentil Soup / Grilled Steak & Sweet Potato",
      calories: "1,950 kcal",
    },
    {
      day: "Saturday",
      meal: "Pancakes & Eggs / Turkey Burger / Salmon Teriyaki",
      calories: "2,000 kcal",
    },
    {
      day: "Sunday",
      meal: "Omelet & Toast / Shrimp Salad / Vegetable Lasagna",
      calories: "1,800 kcal",
    },
  ];

  return (
    <div className="min-h-screen bg-[#030816] text-white px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto bg-[#05112B]/90 border border-sky-800/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(0,163,255,0.15)] backdrop-blur-2xl relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-2">
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#00A3FF] font-semibold">
            SCHEDULE & REGIMEN
          </span>
          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
            Your Custom Fitness Plan 📅
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl">
            Review your weekly workout schedule and tailored nutrition roadmap
            to stay consistent and achieve your goals.
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="grid grid-cols-2 p-1 rounded-2xl bg-[#03091B] border border-sky-950 w-full md:w-auto">
          <button
            onClick={() => setActiveTab("workouts")}
            className={`px-6 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer ${
              activeTab === "workouts"
                ? "bg-[#00A3FF] text-white shadow-[0_0_15px_rgba(0,163,255,0.5)]"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Workouts
          </button>
          <button
            onClick={() => setActiveTab("meals")}
            className={`px-6 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer ${
              activeTab === "meals"
                ? "bg-[#00A3FF] text-white shadow-[0_0_15px_rgba(0,163,255,0.5)]"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Nutrition
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto">
        {activeTab === "workouts" ? (
          <div className="space-y-4">
            <h3 className="font-bold text-sm uppercase tracking-wider text-white flex items-center gap-2">
              <FaDumbbell className="text-[#00A3FF]" />
              <span>Weekly Workout Schedule</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workoutPlan.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#05112B]/85 border border-sky-800/40 rounded-3xl p-6 backdrop-blur-xl space-y-4 shadow-[0_0_20px_rgba(0,163,255,0.08)]"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono uppercase font-bold text-[#00A3FF] bg-[#03091B] px-3 py-1 rounded-full border border-sky-950">
                      {item.day}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                      <FaFire className="text-[#00A3FF]" /> {item.burn}
                    </span>
                  </div>
                  <h4 className="font-bold text-base text-white">
                    {item.routine}
                  </h4>
                  <p className="text-xs text-slate-400 flex items-center gap-1.5 font-mono pt-2 border-t border-sky-950">
                    <FaCalendarAlt className="text-[#00A3FF]" /> Duration:{" "}
                    {item.duration}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <h3 className="font-bold text-sm uppercase tracking-wider text-white flex items-center gap-2">
              <FaUtensils className="text-[#00A3FF]" />
              <span>Weekly Nutrition Roadmap</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mealPlan.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#05112B]/85 border border-sky-800/40 rounded-3xl p-6 backdrop-blur-xl space-y-4 shadow-[0_0_20px_rgba(0,163,255,0.08)]"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono uppercase font-bold text-[#00A3FF] bg-[#03091B] px-3 py-1 rounded-full border border-sky-950">
                      {item.day}
                    </span>
                    <span className="text-xs text-emerald-400 font-bold font-mono">
                      {item.calories}
                    </span>
                  </div>
                  <h4 className="font-bold text-sm text-white leading-relaxed">
                    {item.meal}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

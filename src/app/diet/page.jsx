"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePlan } from "@/context/PlanContext";
import { Trash2, Plus } from "lucide-react";
import Image from "next/image";

export default function DietPage() {
  const { foodLog, addFood, removeFood } = usePlan();

  const sampleIngredients = [
    { name: "Chicken Breast", calories: 248, amount: 150 },
    { name: "Brown Rice", calories: 111, amount: 100 },
    { name: "Broccoli", calories: 51, amount: 150 },
    { name: "Banana", calories: 107, amount: 120 },
  ];

  const totalCalories = foodLog.reduce((acc, curr) => acc + curr.calories, 0);

  return (
    <main className="min-h-screen bg-[#050B14] text-white flex flex-col">
      <Navbar activePage="diet" />

      <div className="flex-1 px-8 lg:px-16 py-10 max-w-7xl mx-auto w-full flex flex-col gap-8">
        {/* Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#0a182f] to-[#040c18] border border-cyan-900/40 flex flex-col gap-3">
          <span className="text-xs text-cyan-400 font-bold uppercase tracking-widest">
            Diet & Nutrition
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight">
            Fuel Your Body, Build Your Goals.
          </h1>
          <p className="text-sm text-gray-400">
            Choose your ingredients, track your calories, and make healthier
            choices every day.
          </p>
        </div>

        {/* Ingredient selector */}
        <div className="p-8 rounded-3xl bg-[#091325] border border-cyan-950 flex flex-col gap-6">
          <h3 className="text-lg font-bold">Raw Ingredients</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sampleIngredients.map((item, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-[#050B14] border border-cyan-950 flex flex-col justify-between gap-4"
              >
                <div>
                  <h4 className="font-bold text-sm text-gray-200">
                    {item.name}
                  </h4>
                  <span className="text-xs text-cyan-400">
                    {item.calories} kcal / {item.amount}g
                  </span>
                </div>
                <button
                  onClick={() => addFood(item)}
                  className="w-full py-2 rounded-xl bg-cyan-950 border border-cyan-800 text-cyan-400 font-semibold text-xs flex items-center justify-center gap-1 hover:bg-cyan-900 transition"
                >
                  <Plus className="w-4 h-4" /> Add to Log
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Food Log table */}
        <div className="p-8 rounded-3xl bg-[#091325] border border-cyan-950 flex flex-col gap-6">
          <div className="flex items-center justify-between border-b border-cyan-950 pb-4">
            <h3 className="text-lg font-bold">Your Food Log Today</h3>
            <span className="text-sm font-semibold text-cyan-400">
              Total Intake: {totalCalories} kcal
            </span>
          </div>

          <div className="flex flex-col gap-3">
            {foodLog.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 rounded-2xl bg-[#050B14] border border-cyan-950"
              >
                <span className="font-medium text-sm text-gray-200">
                  {item.name}
                </span>
                <div className="flex items-center gap-6">
                  <span className="text-sm text-cyan-400 font-semibold">
                    {item.amount}g ({item.calories} kcal)
                  </span>
                  <button
                    onClick={() => removeFood(item.id)}
                    className="text-red-400 hover:text-red-300 transition"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
            {foodLog.length === 0 && (
              <p className="text-sm text-gray-500 text-center py-6">
                No ingredients added today.
              </p>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

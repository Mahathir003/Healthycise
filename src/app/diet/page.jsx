"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import {
  FaUtensils,
  FaFire,
  FaPlus,
  FaTrash,
  FaCheckCircle,
  FaAppleAlt,
  FaDrumstickBite,
  FaBreadSlice,
} from "react-icons/fa";

export default function DietPage() {
  // Pre-loaded food tracker list
  const [foods, setFoods] = useState([
    {
      id: 1,
      name: "Oatmeal with Almond Milk & Berries",
      calories: 320,
      category: "Breakfast",
      weight: "250g",
    },
    {
      id: 2,
      name: "Grilled Chicken Salad with Olive Oil",
      calories: 450,
      category: "Lunch",
      weight: "350g",
    },
    {
      id: 3,
      name: "Whey Protein Shake",
      calories: 180,
      category: "Snack",
      weight: "300ml",
    },
  ]);

  // Form state
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [category, setCategory] = useState("Breakfast");
  const [weight, setWeight] = useState("100g");

  const handleAddFood = (e) => {
    e.preventDefault();
    if (!name.trim() || !calories) return;

    const newFoodItem = {
      id: Date.now(),
      name: name.trim(),
      calories: parseInt(calories) || 100,
      category,
      weight: weight.trim() || "100g",
    };

    setFoods([newFoodItem, ...foods]);
    setName("");
    setCalories("");
    toast.success("Food logged successfully!");
  };

  const handleDeleteFood = (id) => {
    setFoods(foods.filter((f) => f.id !== id));
    toast.success("Food item removed.");
  };

  const totalCaloriesConsumed = foods.reduce(
    (acc, curr) => acc + curr.calories,
    0,
  );
  const dailyCalorieGoal = 2000;
  const caloriePercentage = Math.min(
    Math.round((totalCaloriesConsumed / dailyCalorieGoal) * 100),
    100,
  );

  return (
    <div className="min-h-screen bg-[#030816] text-white px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto bg-[#05112B]/90 border border-sky-800/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(0,163,255,0.15)] backdrop-blur-2xl relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-2">
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#00A3FF] font-semibold">
            DIET & NUTRITION
          </span>
          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
            Track Your Food & Calories 🥗
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl">
            Choose ingredients, enter weights, and monitor your daily calorie
            intake against your nutritional goals.
          </p>
        </div>

        {/* Live Calorie Intake Progress Pill */}
        <div className="bg-[#03091B] border border-sky-800/60 px-6 py-4 rounded-2xl flex items-center gap-5 shadow-[0_0_20px_rgba(0,163,255,0.2)]">
          <div className="w-12 h-12 rounded-xl bg-[#061536] border border-sky-700/50 flex items-center justify-center text-[#00A3FF] text-xl">
            <FaUtensils />
          </div>
          <div>
            <p className="text-[10px] uppercase font-bold text-slate-400">
              Total Consumed Today
            </p>
            <p className="text-2xl font-black text-white">
              {totalCaloriesConsumed}{" "}
              <span className="text-xs font-normal text-slate-400">
                / {dailyCalorieGoal} kcal
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Logged Foods List */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-sm uppercase tracking-wider text-white flex items-center gap-2">
              <FaAppleAlt className="text-[#00A3FF]" />
              <span>Today's Meal Log</span>
            </h3>
            <span className="text-xs text-slate-400 font-mono">
              {foods.length} items logged
            </span>
          </div>

          <div className="space-y-3">
            {foods.map((food) => (
              <div
                key={food.id}
                className="bg-[#05112B]/85 border border-sky-800/40 rounded-2xl p-4 sm:p-5 backdrop-blur-xl flex items-center justify-between shadow-[0_0_20px_rgba(0,163,255,0.08)] hover:border-[#00A3FF] transition"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#03091B] border border-sky-900/50 flex items-center justify-center text-[#00A3FF]">
                    <FaUtensils />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono uppercase font-bold text-[#00A3FF]">
                        {food.category}
                      </span>
                      <span className="text-[10px] text-slate-500">
                        • {food.weight}
                      </span>
                    </div>
                    <h4 className="font-bold text-sm text-white">
                      {food.name}
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="font-black text-white text-sm font-mono">
                    +{food.calories}{" "}
                    <span className="text-[10px] text-slate-400 font-normal">
                      kcal
                    </span>
                  </span>
                  <button
                    onClick={() => handleDeleteFood(food.id)}
                    className="p-2 rounded-xl bg-[#03091B] text-slate-500 hover:text-rose-400 hover:bg-rose-950/20 transition cursor-pointer"
                  >
                    <FaTrash className="text-xs" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Add Food Form */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-[#05112B]/85 border border-sky-800/40 rounded-3xl p-6 sm:p-8 backdrop-blur-xl space-y-6 shadow-[0_0_30px_rgba(0,163,255,0.1)]">
            <h3 className="font-bold text-sm uppercase tracking-wider text-white flex items-center gap-2">
              <FaPlus className="text-[#00A3FF]" />
              <span>Log Meal / Ingredient</span>
            </h3>

            <form onSubmit={handleAddFood} className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Food / Ingredient Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Grilled Salmon & Rice"
                  className="w-full px-4 py-3 rounded-xl bg-[#03091B] border border-sky-950 text-white placeholder-slate-600 text-xs focus:outline-none focus:border-[#00A3FF] transition"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Meal Type
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3 py-3 rounded-xl bg-[#03091B] border border-sky-950 text-white text-xs focus:outline-none focus:border-[#00A3FF] transition"
                  >
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                    <option value="Snack">Snack</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Serving Weight
                  </label>
                  <input
                    type="text"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="e.g. 250g"
                    className="w-full px-3 py-3 rounded-xl bg-[#03091B] border border-sky-950 text-white text-xs focus:outline-none focus:border-[#00A3FF] transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Calories (kcal)
                </label>
                <input
                  type="number"
                  min="1"
                  max="3000"
                  required
                  value={calories}
                  onChange={(e) => setCalories(e.target.value)}
                  placeholder="e.g. 450"
                  className="w-full px-4 py-3 rounded-xl bg-[#03091B] border border-sky-950 text-white text-xs focus:outline-none focus:border-[#00A3FF] transition"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#00A3FF] text-white font-bold text-xs uppercase tracking-wide hover:bg-[#008fe3] transition shadow-[0_0_20px_rgba(0,163,255,0.45)] cursor-pointer mt-2"
              >
                Log Meal
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

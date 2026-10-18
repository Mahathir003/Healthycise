"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import {
  FaDumbbell,
  FaFire,
  FaClock,
  FaPlus,
  FaCheckCircle,
  FaCalendarPlus,
  FaTrashAlt,
} from "react-icons/fa";

export default function WorkoutsPage() {
  const [apiWorkouts, setApiWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);

  // User's active To-Do list for today
  const [todoWorkouts, setTodoWorkouts] = useState([
    {
      id: "todo-1",
      title: "Full Body Hypertrophy",
      category: "Strength",
      duration: "45 min",
      caloriesBurned: 320,
      completed: true,
    },
    {
      id: "todo-2",
      title: "HIIT Fat Burner",
      category: "Cardio",
      duration: "20 min",
      caloriesBurned: 280,
      completed: false,
    },
  ]);

  // Custom form input for adding directly to the WORKOUT LIBRARY
  const [customTitle, setCustomTitle] = useState("");
  const [customDuration, setCustomDuration] = useState("30");
  const [customCalories, setCustomCalories] = useState("250");
  const [customCategory, setCustomCategory] = useState("Strength");

  // Category image mapping for library cards
  const categoryImages = {
    Strength:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80",
    Cardio:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80",
    Endurance:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=600&q=80",
    Flexibility:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80",
  };

  // Fetch all workouts from your API on mount
  useEffect(() => {
    async function fetchWorkouts() {
      try {
        setLoading(true);
        const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
        if (!res.ok) throw new Error("Failed to fetch workouts");
        const data = await res.json();
        setApiWorkouts(data.data || data || []);
      } catch (err) {
        console.error("API error, using fallback data:", err);
        setApiWorkouts([
          {
            id: "1",
            title: "Barbell Bench Press",
            category: "Strength",
            duration: "25 min",
            caloriesBurned: 180,
          },
          {
            id: "2",
            title: "Pull-Up",
            category: "Strength",
            duration: "15 min",
            caloriesBurned: 120,
          },
          {
            id: "3",
            title: "Back Squat",
            category: "Strength",
            duration: "30 min",
            caloriesBurned: 240,
          },
          {
            id: "4",
            title: "Overhead Press",
            category: "Strength",
            duration: "20 min",
            caloriesBurned: 150,
          },
        ]);
      } finally {
        setLoading(false);
      }
    }

    fetchWorkouts();
  }, []);

  // Add workout from library grid to today's To-Do list
  const handleAddForToday = (workout, e) => {
    e.preventDefault();
    e.stopPropagation();

    const title = workout.title || workout.name || "Workout Session";
    const exists = todoWorkouts.some((item) => item.title === title);
    if (exists) {
      toast.error("This workout is already in your To-Do list for today!");
      return;
    }

    const newItem = {
      id: String(Date.now()),
      title: title,
      category: workout.category || "Strength",
      duration: workout.duration || "30 min",
      caloriesBurned: workout.caloriesBurned || workout.calories || 200,
      completed: false,
    };

    setTodoWorkouts([newItem, ...todoWorkouts]);
    toast.success(`Added "${newItem.title}" to today's To-Do list!`);
  };

  // Add custom workout directly to WORKOUT LIBRARY using /customed-workout.png
  const handleAddCustomLibrary = (e) => {
    e.preventDefault();
    if (!customTitle.trim()) return;

    const newLibraryItem = {
      id: `custom-${Date.now()}`,
      title: customTitle.trim(),
      category: customCategory,
      duration: `${customDuration} min`,
      caloriesBurned: parseInt(customCalories) || 200,
      image: "/customed-workout.JPG",
      isCustom: true,
    };

    setApiWorkouts([newLibraryItem, ...apiWorkouts]);
    setCustomTitle("");
    toast.success("Custom workout added to library!");
  };

  // Remove workout from To-Do list
  const handleDeleteFromTodo = (id) => {
    setTodoWorkouts(todoWorkouts.filter((item) => item.id !== id));
    toast.success("Removed from To-Do list.");
  };

  // Toggle completion status in To-Do list
  const toggleTodoComplete = (id) => {
    setTodoWorkouts(
      todoWorkouts.map((item) => {
        if (item.id === id) {
          const updated = !item.completed;
          toast(
            updated
              ? `Completed: ${item.title}! 🎉`
              : `Unchecked: ${item.title}`,
            {
              icon: updated ? "🔥" : "ℹ️",
            },
          );
          return { ...item, completed: updated };
        }
        return item;
      }),
    );
  };

  // Calculate calories metrics for To-Do list
  const totalCaloriesTarget = todoWorkouts.reduce(
    (acc, curr) => acc + (curr.caloriesBurned || 0),
    0,
  );
  const totalCaloriesBurned = todoWorkouts
    .filter((item) => item.completed)
    .reduce((acc, curr) => acc + (curr.caloriesBurned || 0), 0);
  const caloriesRemaining = Math.max(
    0,
    totalCaloriesTarget - totalCaloriesBurned,
  );

  return (
    <div className="min-h-screen bg-[#030816] text-white px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto bg-[#05112B]/90 border border-sky-800/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(0,163,255,0.15)] backdrop-blur-2xl relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-2">
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#00A3FF] font-semibold">
            WORKOUT & BURN
          </span>
          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
            Plan & Crush Your Workouts 🏋️‍♂️
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl">
            Explore the library, pin workouts to today's To-Do list, check them
            off as you complete them, and track your active calorie burn.
          </p>
        </div>

        {/* Live Burned Counter Pill */}
        <div className="bg-[#03091B] border border-sky-800/60 px-6 py-4 rounded-2xl flex items-center gap-4 shadow-[0_0_20px_rgba(0,163,255,0.2)]">
          <div className="w-12 h-12 rounded-xl bg-[#061536] border border-sky-700/50 flex items-center justify-center text-[#00A3FF] text-xl">
            <FaFire />
          </div>
          <div>
            <p className="text-[10px] uppercase font-bold text-slate-400">
              Total Burned (Completed)
            </p>
            <p className="text-2xl font-black text-white">
              {totalCaloriesBurned}{" "}
              <span className="text-xs font-normal text-slate-400">kcal</span>
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Workout Library Grid */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-sm uppercase tracking-wider text-white flex items-center gap-2">
              <FaDumbbell className="text-[#00A3FF]" />
              <span>Workout Library</span>
            </h3>
            <span className="text-xs text-slate-400 font-mono">
              {apiWorkouts.length} available exercises
            </span>
          </div>

          {loading ? (
            <div className="py-20 text-center text-slate-400 text-xs font-mono uppercase tracking-widest">
              Loading workouts from API...
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {apiWorkouts.map((w) => {
                const workoutId = w.id || w._id;
                const title = w.title || w.name || "Workout Session";
                const category = w.category || "Strength";
                const duration = w.duration || "30 min";
                const calories = w.caloriesBurned || w.calories || 200;
                const cardImage =
                  w.image ||
                  categoryImages[category] ||
                  categoryImages.Strength;

                return (
                  <div
                    key={workoutId}
                    className="bg-[#05112B]/85 border border-sky-800/40 rounded-3xl overflow-hidden backdrop-blur-xl transition-all duration-200 flex flex-col justify-between shadow-[0_0_20px_rgba(0,163,255,0.08)] hover:border-[#00A3FF]"
                  >
                    {/* Card Image Header (Links to details) */}
                    <Link
                      href={`/workouts/${workoutId}`}
                      className="block relative w-full h-36 bg-[#03091B] overflow-hidden group"
                    >
                      <img
                        src={cardImage}
                        alt={title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-300 opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#05112B] via-transparent to-black/20" />
                      <span className="absolute top-3 left-3 text-[9px] font-mono uppercase font-bold text-[#00A3FF] bg-[#03091B]/80 px-2.5 py-1 rounded-full border border-sky-900 backdrop-blur-md">
                        {category}
                      </span>
                    </Link>

                    <div className="p-5 space-y-4">
                      <Link href={`/workouts/${workoutId}`} className="block">
                        <h4 className="font-bold text-sm text-white hover:text-[#00A3FF] transition line-clamp-1">
                          {title}
                        </h4>
                      </Link>

                      <div className="flex items-center justify-between pt-2 border-t border-sky-950 text-xs text-slate-400">
                        <span className="flex items-center gap-1 font-mono">
                          <FaClock className="text-[#00A3FF]" /> {duration}
                        </span>
                        <span className="flex items-center gap-1 font-bold text-white font-mono">
                          <FaFire className="text-[#00A3FF]" /> {calories} kcal
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={(e) => handleAddForToday(w, e)}
                        className="w-full py-2.5 rounded-xl bg-[#061536] hover:bg-[#00A3FF] border border-sky-800/50 hover:border-[#00A3FF] text-xs font-bold text-slate-200 hover:text-white transition flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <FaCalendarPlus className="text-xs text-[#00A3FF] group-hover:text-white" />
                        <span>Add for Today</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Right Column: To-Do List with Calorie Metrics & Add Custom Workout */}
        <div className="lg:col-span-5 space-y-6">
          {/* To-Do List Card */}
          <div className="bg-[#05112B]/85 border border-sky-800/40 rounded-3xl p-6 sm:p-8 backdrop-blur-xl space-y-6 shadow-[0_0_30px_rgba(0,163,255,0.1)]">
            <div className="flex items-center justify-between border-b border-sky-950 pb-4">
              <div>
                <h3 className="font-bold text-sm uppercase tracking-wider text-white flex items-center gap-2">
                  <FaCheckCircle className="text-[#00A3FF]" />
                  <span>Today's To-Do List</span>
                </h3>
                <p className="text-[11px] text-slate-400 pt-1 font-mono">
                  Remaining to burn:{" "}
                  <strong className="text-[#00A3FF]">
                    {caloriesRemaining} kcal
                  </strong>{" "}
                  (Target: {totalCaloriesTarget} kcal)
                </p>
              </div>
              <span className="text-xs text-slate-400 font-mono bg-[#03091B] px-3 py-1.5 rounded-xl border border-sky-950">
                {todoWorkouts.filter((i) => i.completed).length} /{" "}
                {todoWorkouts.length} done
              </span>
            </div>

            <div className="space-y-3 max-h-[380px] overflow-y-auto pr-1">
              {todoWorkouts.length === 0 ? (
                <p className="text-xs text-slate-500 text-center py-6">
                  No workouts added for today yet. Pick from the library!
                </p>
              ) : (
                todoWorkouts.map((item) => (
                  <div
                    key={item.id}
                    className={`flex items-center justify-between p-3.5 rounded-2xl border transition ${
                      item.completed
                        ? "bg-[#03091B]/50 border-sky-950 opacity-75"
                        : "bg-[#03091B] border-sky-900/40"
                    }`}
                  >
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-mono uppercase font-bold text-[#00A3FF]">
                          {item.category}
                        </span>
                        <span className="text-[9px] text-slate-500">
                          • {item.duration}
                        </span>
                      </div>
                      <p
                        className={`font-bold text-xs ${item.completed ? "line-through text-slate-400" : "text-white"}`}
                      >
                        {item.title}
                      </p>
                      <p className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
                        <FaFire className="text-[#00A3FF]" />{" "}
                        {item.caloriesBurned} kcal to burn
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => toggleTodoComplete(item.id)}
                        className={`w-7 h-7 rounded-full flex items-center justify-center transition cursor-pointer shrink-0 ${
                          item.completed
                            ? "bg-emerald-500 text-white shadow-[0_0_12px_rgba(16,185,129,0.5)]"
                            : "bg-[#061536] border border-sky-800 text-slate-500 hover:text-white"
                        }`}
                      >
                        <FaCheckCircle className="text-xs" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDeleteFromTodo(item.id)}
                        className="w-7 h-7 rounded-full bg-[#061536] border border-sky-900 text-slate-500 hover:text-rose-400 flex items-center justify-center transition cursor-pointer shrink-0"
                        title="Remove"
                      >
                        <FaTrashAlt className="text-[10px]" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Add Custom Workout to LIBRARY Form */}
          <div className="bg-[#05112B]/85 border border-sky-800/40 rounded-3xl p-6 sm:p-8 backdrop-blur-xl space-y-6 shadow-[0_0_30px_rgba(0,163,255,0.1)]">
            <h3 className="font-bold text-sm uppercase tracking-wider text-white flex items-center gap-2">
              <FaPlus className="text-[#00A3FF]" />
              <span>Add Custom Workout (to Library)</span>
            </h3>

            <form onSubmit={handleAddCustomLibrary} className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Workout Name
                </label>
                <input
                  type="text"
                  required
                  value={customTitle}
                  onChange={(e) => setCustomTitle(e.target.value)}
                  placeholder="e.g. Custom Heavy Leg Routine"
                  className="w-full px-4 py-3 rounded-xl bg-[#03091B] border border-sky-950 text-white placeholder-slate-600 text-xs focus:outline-none focus:border-[#00A3FF] transition"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Category
                  </label>
                  <select
                    value={customCategory}
                    onChange={(e) => setCustomCategory(e.target.value)}
                    className="w-full px-3 py-3 rounded-xl bg-[#03091B] border border-sky-950 text-white text-xs focus:outline-none focus:border-[#00A3FF] transition"
                  >
                    <option value="Strength">Strength</option>
                    <option value="Cardio">Cardio</option>
                    <option value="Endurance">Endurance</option>
                    <option value="Flexibility">Flexibility</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Duration (min)
                  </label>
                  <input
                    type="number"
                    min="5"
                    max="180"
                    value={customDuration}
                    onChange={(e) => setCustomDuration(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#03091B] border border-sky-950 text-white text-xs focus:outline-none focus:border-[#00A3FF] transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Est. Calories (kcal)
                </label>
                <input
                  type="number"
                  min="10"
                  max="2000"
                  value={customCalories}
                  onChange={(e) => setCustomCalories(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#03091B] border border-sky-950 text-white text-xs focus:outline-none focus:border-[#00A3FF] transition"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#00A3FF] text-white font-bold text-xs uppercase tracking-wide hover:bg-[#008fe3] transition shadow-[0_0_20px_rgba(0,163,255,0.45)] cursor-pointer"
              >
                Add to Library
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

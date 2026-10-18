"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import {
  FaDumbbell,
  FaFire,
  FaClock,
  FaPlus,
  FaCheckCircle,
  FaRunning,
  FaHeartbeat,
  FaBolt,
} from "react-icons/fa";

export default function WorkoutsPage() {
  // Pre-loaded workouts for today & tomorrow
  const [workouts, setWorkouts] = useState([
    {
      id: 1,
      title: "Full Body Hypertrophy",
      category: "Strength",
      duration: "45 min",
      caloriesBurned: 320,
      day: "Today",
      completed: true,
      icon: <FaDumbbell className="text-[#00A3FF]" />,
    },
    {
      id: 2,
      category: "Cardio",
      title: "HIIT Fat Burner",
      duration: "20 min",
      caloriesBurned: 280,
      day: "Today",
      completed: true,
      icon: <FaFire className="text-[#00A3FF]" />,
    },
    {
      id: 3,
      category: "Strength",
      title: "Upper Body Strength",
      duration: "40 min",
      caloriesBurned: 350,
      day: "Tomorrow",
      completed: false,
      icon: <FaBolt className="text-[#00A3FF]" />,
    },
    {
      id: 4,
      category: "Endurance",
      title: "Outdoor Running",
      duration: "30 min",
      caloriesBurned: 420,
      day: "Tomorrow",
      completed: false,
      icon: <FaRunning className="text-[#00A3FF]" />,
    },
  ]);

  // Form state for adding a new workout
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Strength");
  const [duration, setDuration] = useState("30");
  const [calories, setCalories] = useState("250");
  const [day, setDay] = useState("Today");

  const handleAddWorkout = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newWorkoutItem = {
      id: Date.now(),
      title: title.trim(),
      category,
      duration: `${duration} min`,
      caloriesBurned: parseInt(calories) || 200,
      day,
      completed: false,
      icon: <FaDumbbell className="text-[#00A3FF]" />,
    };

    setWorkouts([newWorkoutItem, ...workouts]);
    setTitle("");
    toast.success("Workout added successfully!");
  };

  const toggleComplete = (id) => {
    setWorkouts(
      workouts.map((w) => {
        if (w.id === id) {
          const updated = !w.completed;
          toast(
            updated ? `Completed: ${w.title}! 🎉` : `Unchecked: ${w.title}`,
            {
              icon: updated ? "🔥" : "ℹ️",
            },
          );
          return { ...w, completed: updated };
        }
        return w;
      }),
    );
  };

  const totalCaloriesBurned = workouts
    .filter((w) => w.completed)
    .reduce((acc, curr) => acc + curr.caloriesBurned, 0);

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
            Pick your routines for today and tomorrow, track active session
            durations, and watch your calories burn in real-time.
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
        {/* Left Column: Scheduled Workouts List */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-sm uppercase tracking-wider text-white flex items-center gap-2">
              <FaDumbbell className="text-[#00A3FF]" />
              <span>Today & Tomorrow Schedule</span>
            </h3>
            <span className="text-xs text-slate-400 font-mono">
              {workouts.filter((w) => w.completed).length} of {workouts.length}{" "}
              completed
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {workouts.map((w) => (
              <div
                key={w.id}
                className={`bg-[#05112B]/85 border rounded-3xl p-6 backdrop-blur-xl transition-all duration-200 flex flex-col justify-between space-y-4 ${
                  w.completed
                    ? "border-sky-900/30 opacity-75"
                    : "border-sky-800/40 shadow-[0_0_25px_rgba(0,163,255,0.1)] hover:border-[#00A3FF]"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-[#03091B] border border-sky-900/50 flex items-center justify-center shadow">
                      {w.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase font-bold text-[#00A3FF]">
                        {w.category} • {w.day}
                      </span>
                      <h4 className="font-bold text-sm text-white">
                        {w.title}
                      </h4>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleComplete(w.id)}
                    className={`w-7 h-7 rounded-full flex items-center justify-center transition cursor-pointer ${
                      w.completed
                        ? "bg-emerald-500 text-white shadow-[0_0_12px_rgba(16,185,129,0.5)]"
                        : "bg-[#03091B] border border-sky-800 text-slate-500 hover:text-white"
                    }`}
                  >
                    <FaCheckCircle className="text-xs" />
                  </button>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-sky-950 text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 font-mono">
                    <FaClock className="text-[#00A3FF]" /> {w.duration}
                  </span>
                  <span className="flex items-center gap-1.5 font-bold text-white font-mono">
                    <FaFire className="text-[#00A3FF]" /> {w.caloriesBurned}{" "}
                    kcal
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Add Custom Workout Form */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-[#05112B]/85 border border-sky-800/40 rounded-3xl p-6 sm:p-8 backdrop-blur-xl space-y-6 shadow-[0_0_30px_rgba(0,163,255,0.1)]">
            <h3 className="font-bold text-sm uppercase tracking-wider text-white flex items-center gap-2">
              <FaPlus className="text-[#00A3FF]" />
              <span>Add Custom Workout</span>
            </h3>

            <form onSubmit={handleAddWorkout} className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Workout Name
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Leg Day & Squats"
                  className="w-full px-4 py-3 rounded-xl bg-[#03091B] border border-sky-950 text-white placeholder-slate-600 text-xs focus:outline-none focus:border-[#00A3FF] transition"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Category
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
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
                    Schedule
                  </label>
                  <select
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    className="w-full px-3 py-3 rounded-xl bg-[#03091B] border border-sky-950 text-white text-xs focus:outline-none focus:border-[#00A3FF] transition"
                  >
                    <option value="Today">Today</option>
                    <option value="Tomorrow">Tomorrow</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Duration (min)
                  </label>
                  <input
                    type="number"
                    min="5"
                    max="180"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#03091B] border border-sky-950 text-white text-xs focus:outline-none focus:border-[#00A3FF] transition"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Est. Calories (kcal)
                  </label>
                  <input
                    type="number"
                    min="10"
                    max="2000"
                    value={calories}
                    onChange={(e) => setCalories(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#03091B] border border-sky-950 text-white text-xs focus:outline-none focus:border-[#00A3FF] transition"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#00A3FF] text-white font-bold text-xs uppercase tracking-wide hover:bg-[#008fe3] transition shadow-[0_0_20px_rgba(0,163,255,0.45)] cursor-pointer mt-2"
              >
                Add Workout
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

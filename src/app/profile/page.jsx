"use client";

import { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import {
  FaUser,
  FaEnvelope,
  FaWeight,
  FaCalendarAlt,
  FaEdit,
  FaChartLine,
  FaHeart,
  FaDumbbell,
  FaUtensils,
  FaTimes,
  FaCheckCircle,
} from "react-icons/fa";
import { useAuth } from "@/context/AuthContext";

export default function ProfilePage() {
  const { user } = useAuth() || {};

  // Default profile state if user isn't logged in yet
  const profile = user || {
    name: "MAHATHIRMAHI03",
    email: "mahathirmahi03@gmail.com",
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
  };

  // Personal Info Edit Modal State
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [editName, setEditName] = useState(profile.name);
  const [editAge, setEditAge] = useState(profile.age);
  const [editHeight, setEditHeight] = useState(profile.height);
  const [editWeight, setEditWeight] = useState(profile.weight);
  const [editActivity, setEditActivity] = useState(profile.activityLevel);

  // Health Details Edit Modal State
  const [isEditingHealth, setIsEditingHealth] = useState(false);
  const [editDiet, setEditDiet] = useState(profile.dietPreference);
  const [editMedical, setEditMedical] = useState(profile.medicalConditions);
  const [editAllergies, setEditAllergies] = useState(profile.allergies);
  const [editFitnessLevel, setEditFitnessLevel] = useState(
    profile.fitnessLevel,
  );

  // Weight entry form state for the interactive widget
  const [newWeight, setNewWeight] = useState(profile.weight);
  const [entryDate, setEntryDate] = useState(
    new Date().toISOString().split("T")[0],
  );

  // BMI calculation: weight (kg) / [height (m)]^2
  const heightInMeters = profile.height / 100;
  const currentBmi = (
    profile.weight /
    (heightInMeters * heightInMeters)
  ).toFixed(1);
  const bmr = Math.round(
    10 * profile.weight + 6.25 * profile.height - 5 * profile.age + 5,
  );

  const handleWeightSubmit = (e) => {
    e.preventDefault();
    toast.success(`Weight updated to ${newWeight} kg successfully!`);
  };

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    const updatedUser = {
      ...profile,
      name: editName,
      age: Number(editAge),
      height: Number(editHeight),
      weight: Number(editWeight),
      activityLevel: editActivity,
    };

    localStorage.setItem("healthycise_user", JSON.stringify(updatedUser));
    toast.success("Personal information updated successfully!");
    setIsEditingProfile(false);
    window.location.reload();
  };

  const handleHealthUpdate = (e) => {
    e.preventDefault();
    const updatedUser = {
      ...profile,
      dietPreference: editDiet,
      medicalConditions: editMedical,
      allergies: editAllergies,
      fitnessLevel: editFitnessLevel,
    };

    localStorage.setItem("healthycise_user", JSON.stringify(updatedUser));
    toast.success("Health details updated successfully!");
    setIsEditingHealth(false);
    window.location.reload();
  };

  // Mock historical BMI data for the graph
  const bmiHistory = [
    { month: "May", bmi: 25.2, weight: 73.0 },
    { month: "Jun", bmi: 24.5, weight: 71.8 },
    { month: "Jul", bmi: 23.8, weight: 69.8 },
    { month: "Aug", bmi: 23.2, weight: 68.0 },
    { month: "Sep", bmi: 22.4, weight: 69.2 },
    { month: "Oct", bmi: parseFloat(currentBmi), weight: profile.weight },
  ];

  return (
    <div className="min-h-screen bg-[#030816] text-white px-4 sm:px-6 lg:px-8 py-8 space-y-8 relative">
      {/* Top Banner Section */}
      <div className="max-w-7xl mx-auto bg-[#05112B]/90 border border-sky-800/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(0,163,255,0.15)] backdrop-blur-2xl relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-30 pointer-events-none hidden lg:block">
          <div className="w-full h-full bg-gradient-to-l from-[#00A3FF]/20 to-transparent" />
        </div>
        <div className="relative z-10 space-y-2">
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#00A3FF] font-semibold">
            MY PROFILE
          </span>
          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
            Hello, {profile.name} 👋
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl">
            Your health journey, your profile. Here you can manage your personal
            information, track your BMI progress, and update your goals.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Personal Information & Health Details */}
        <div className="lg:col-span-8 space-y-8">
          {/* Personal Information Card */}
          <div className="bg-[#05112B]/85 border border-sky-800/40 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-[0_0_30px_rgba(0,163,255,0.1)] space-y-6">
            <div className="flex items-center justify-between border-b border-sky-950 pb-4">
              <h3 className="font-bold text-sm uppercase tracking-wider text-white flex items-center gap-2">
                <FaUser className="text-[#00A3FF]" />
                <span>Personal Information</span>
              </h3>
              <button
                onClick={() => setIsEditingProfile(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#061536] border border-sky-800/40 text-xs font-bold text-slate-300 hover:text-white hover:border-[#00A3FF] transition cursor-pointer"
              >
                <FaEdit className="text-[#00A3FF]" />
                <span>Edit</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20 rounded-2xl bg-[#03091B] border border-sky-800/50 flex items-center justify-center shadow-[0_0_20px_rgba(0,163,255,0.2)]">
                  <span className="text-2xl font-black text-[#00A3FF]">
                    {profile.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">
                    {profile.name}
                  </h4>
                  <p className="text-xs text-slate-400">{profile.email}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="bg-[#03091B] p-3 rounded-2xl border border-sky-950">
                  <span className="text-slate-500 block text-[10px] uppercase font-bold">
                    Age
                  </span>
                  <span className="font-bold text-white text-sm">
                    {profile.age} years
                  </span>
                </div>
                <div className="bg-[#03091B] p-3 rounded-2xl border border-sky-950">
                  <span className="text-slate-500 block text-[10px] uppercase font-bold">
                    Gender
                  </span>
                  <span className="font-bold text-white text-sm">
                    {profile.gender}
                  </span>
                </div>
                <div className="bg-[#03091B] p-3 rounded-2xl border border-sky-950">
                  <span className="text-slate-500 block text-[10px] uppercase font-bold">
                    Height
                  </span>
                  <span className="font-bold text-white text-sm">
                    {profile.height} cm
                  </span>
                </div>
                <div className="bg-[#03091B] p-3 rounded-2xl border border-sky-950">
                  <span className="text-slate-500 block text-[10px] uppercase font-bold">
                    Activity Level
                  </span>
                  <span className="font-bold text-white text-xs truncate block">
                    {profile.activityLevel}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* BMI & BMR Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[#05112B]/85 border border-sky-800/40 rounded-3xl p-6 backdrop-blur-xl shadow-[0_0_30px_rgba(0,163,255,0.1)] space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400">
                  BMI
                </h4>
                <span className="px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-[10px] font-bold text-emerald-400 uppercase">
                  Normal
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-white">
                  {currentBmi}
                </span>
                <span className="text-xs text-slate-400">kg/m²</span>
              </div>
              <div className="space-y-1.5 pt-2">
                <div className="h-2 w-full rounded-full bg-gradient-to-r from-cyan-500 via-emerald-500 via-amber-500 to-rose-500" />
                <div className="flex justify-between text-[10px] font-mono text-slate-500">
                  <span>&lt;18.5</span>
                  <span>18.5–24.9</span>
                  <span>25–29.9</span>
                  <span>≥30</span>
                </div>
              </div>
            </div>

            <div className="bg-[#05112B]/85 border border-sky-800/40 rounded-3xl p-6 backdrop-blur-xl shadow-[0_0_30px_rgba(0,163,255,0.1)] space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400">
                  BMR
                </h4>
                <FaHeart className="text-[#00A3FF]" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-white">{bmr}</span>
                <span className="text-xs text-slate-400">kcal/day</span>
              </div>
              <p className="text-slate-400 text-xs pt-1">
                Your body burns this many calories at rest (approx.).
              </p>
            </div>
          </div>

          {/* Health Details */}
          <div className="bg-[#05112B]/85 border border-sky-800/40 rounded-3xl p-6 sm:p-8 backdrop-blur-xl space-y-6">
            <div className="flex items-center justify-between border-b border-sky-950 pb-4">
              <h3 className="font-bold text-sm uppercase tracking-wider text-white flex items-center gap-2">
                <FaHeart className="text-[#00A3FF]" />
                <span>Health Details</span>
              </h3>
              <button
                onClick={() => setIsEditingHealth(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#061536] border border-sky-800/40 text-xs font-bold text-slate-300 hover:text-white hover:border-[#00A3FF] transition cursor-pointer"
              >
                <FaEdit className="text-[#00A3FF]" />
                <span>Edit</span>
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div className="bg-[#03091B] p-4 rounded-2xl border border-sky-950 space-y-1">
                <span className="text-slate-500 block text-[10px] uppercase font-bold">
                  Diet Preference
                </span>
                <span className="font-bold text-white text-xs block">
                  {profile.dietPreference}
                </span>
              </div>
              <div className="bg-[#03091B] p-4 rounded-2xl border border-sky-950 space-y-1">
                <span className="text-slate-500 block text-[10px] uppercase font-bold">
                  Medical Conditions
                </span>
                <span className="font-bold text-white text-xs block">
                  {profile.medicalConditions}
                </span>
              </div>
              <div className="bg-[#03091B] p-4 rounded-2xl border border-sky-950 space-y-1">
                <span className="text-slate-500 block text-[10px] uppercase font-bold">
                  Allergies
                </span>
                <span className="font-bold text-white text-xs block">
                  {profile.allergies}
                </span>
              </div>
              <div className="bg-[#03091B] p-4 rounded-2xl border border-sky-950 space-y-1">
                <span className="text-slate-500 block text-[10px] uppercase font-bold">
                  Fitness Level
                </span>
                <span className="font-bold text-white text-xs block">
                  {profile.fitnessLevel}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: BMI Progress Graph & Update Weight Widget */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-[#05112B]/85 border border-sky-800/40 rounded-3xl p-6 backdrop-blur-xl space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-sm uppercase tracking-wider text-white flex items-center gap-2">
                <FaChartLine className="text-[#00A3FF]" />
                <span>BMI Progress</span>
              </h3>
            </div>

            <div className="space-y-2">
              <p className="text-xs text-slate-400 font-mono uppercase tracking-widest text-[10px]">
                Average Monthly Body Mass Index
              </p>

              <div className="relative h-48 w-full pt-4">
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                  <div className="border-b border-sky-700 w-full" />
                  <div className="border-b border-sky-700 w-full" />
                  <div className="border-b border-sky-700 w-full" />
                  <div className="border-b border-sky-700 w-full" />
                </div>

                <svg
                  className="w-full h-full overflow-visible"
                  viewBox="0 0 300 140"
                  fill="none"
                >
                  <defs>
                    <linearGradient
                      id="bmiGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#00A3FF"
                        stopOpacity="0.35"
                      />
                      <stop
                        offset="100%"
                        stopColor="#00A3FF"
                        stopOpacity="0.0"
                      />
                    </linearGradient>
                  </defs>

                  <path
                    d="M 15 35 Q 70 50 120 70 T 225 100 T 285 110 L 285 140 L 15 140 Z"
                    fill="url(#bmiGradient)"
                  />
                  <path
                    d="M 15 35 Q 70 50 120 70 T 225 100 T 285 110"
                    stroke="#00A3FF"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />

                  {[
                    { x: 15, y: 35, val: "25.2" },
                    { x: 72, y: 52, val: "24.5" },
                    { x: 120, y: 70, val: "23.8" },
                    { x: 172, y: 88, val: "23.2" },
                    { x: 225, y: 100, val: "22.4" },
                    { x: 285, y: 110, val: currentBmi },
                  ].map((pt, i) => (
                    <g key={i} className="group cursor-pointer">
                      <circle
                        cx={pt.x}
                        cy={pt.y}
                        r="4.5"
                        fill="#030816"
                        stroke="#00A3FF"
                        strokeWidth="2.5"
                      />
                      <text
                        x={pt.x}
                        y={pt.y - 10}
                        fill="#38BDF8"
                        fontSize="10"
                        textAnchor="middle"
                        fontWeight="bold"
                      >
                        {pt.val}
                      </text>
                    </g>
                  ))}
                </svg>

                <div className="absolute inset-x-0 bottom-[-15px] flex justify-between text-[10px] font-mono text-slate-400 px-2">
                  {bmiHistory.map((h, i) => (
                    <span key={i}>{h.month}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-sky-950">
              <div className="bg-[#03091B] p-3 rounded-2xl border border-sky-950">
                <span className="text-slate-500 block text-[10px] uppercase font-bold">
                  Current BMI
                </span>
                <span className="font-black text-white text-base">
                  {currentBmi}
                </span>
              </div>
              <div className="bg-[#03091B] p-3 rounded-2xl border border-sky-950">
                <span className="text-slate-500 block text-[10px] uppercase font-bold">
                  Change (Months)
                </span>
                <span className="font-bold text-emerald-400 text-sm flex items-center gap-1">
                  -2.8 <span className="text-xs">↓</span>
                </span>
              </div>
            </div>
          </div>

          {/* Update Weight Widget */}
          <div className="bg-[#05112B]/85 border border-sky-800/40 rounded-3xl p-6 backdrop-blur-xl space-y-4">
            <h3 className="font-bold text-sm uppercase tracking-wider text-white flex items-center gap-2">
              <FaWeight className="text-[#00A3FF]" />
              <span>Update Weight (Monthly)</span>
            </h3>

            <form onSubmit={handleWeightSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Weight (kg)
                </label>
                <input
                  type="number"
                  step="0.1"
                  required
                  value={newWeight}
                  onChange={(e) => setNewWeight(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#03091B] border border-sky-950 text-white text-xs focus:outline-none focus:border-[#00A3FF] transition"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Date
                </label>
                <input
                  type="date"
                  required
                  value={entryDate}
                  onChange={(e) => setEntryDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#03091B] border border-sky-950 text-white text-xs focus:outline-none focus:border-[#00A3FF] transition"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#00A3FF] text-white font-bold text-xs uppercase tracking-wide hover:bg-[#008fe3] transition shadow-[0_0_20px_rgba(0,163,255,0.4)] cursor-pointer"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* PERSONAL INFO EDIT MODAL */}
      {isEditingProfile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md px-4">
          <div className="w-full max-w-lg bg-[#05112B] border border-sky-800/60 rounded-3xl p-6 sm:p-8 shadow-[0_0_60px_rgba(0,163,255,0.3)] space-y-6 relative animate-in fade-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center border-b border-sky-950 pb-4">
              <h3 className="font-bold text-base uppercase tracking-wider text-white flex items-center gap-2">
                <FaEdit className="text-[#00A3FF]" />
                <span>Edit Personal Information</span>
              </h3>
              <button
                onClick={() => setIsEditingProfile(false)}
                className="p-2 rounded-xl bg-[#03091B] text-slate-400 hover:text-white transition cursor-pointer"
              >
                <FaTimes />
              </button>
            </div>

            <form onSubmit={handleProfileUpdate} className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Name / Alias
                </label>
                <input
                  type="text"
                  required
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#03091B] border border-sky-950 text-white text-xs focus:outline-none focus:border-[#00A3FF] transition"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Age (Years)
                  </label>
                  <input
                    type="number"
                    required
                    value={editAge}
                    onChange={(e) => setEditAge(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#03091B] border border-sky-950 text-white text-xs focus:outline-none focus:border-[#00A3FF] transition"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Height (cm)
                  </label>
                  <input
                    type="number"
                    required
                    value={editHeight}
                    onChange={(e) => setEditHeight(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#03091B] border border-sky-950 text-white text-xs focus:outline-none focus:border-[#00A3FF] transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    required
                    value={editWeight}
                    onChange={(e) => setEditWeight(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#03091B] border border-sky-950 text-white text-xs focus:outline-none focus:border-[#00A3FF] transition"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Activity Level
                  </label>
                  <select
                    value={editActivity}
                    onChange={(e) => setEditActivity(e.target.value)}
                    className="w-full px-3 py-3 rounded-xl bg-[#03091B] border border-sky-950 text-white text-xs focus:outline-none focus:border-[#00A3FF] transition"
                  >
                    <option value="Sedentary">Sedentary</option>
                    <option value="Lightly Active">Lightly Active</option>
                    <option value="Moderately Active">Moderately Active</option>
                    <option value="Very Active">Very Active</option>
                  </select>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsEditingProfile(false)}
                  className="px-5 py-3 rounded-xl bg-[#03091B] border border-sky-950 text-slate-300 font-bold text-xs hover:text-white transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-[#00A3FF] text-white font-bold text-xs uppercase tracking-wide hover:bg-[#008fe3] transition shadow-[0_0_20px_rgba(0,163,255,0.4)] cursor-pointer"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* HEALTH DETAILS EDIT MODAL */}
      {isEditingHealth && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md px-4">
          <div className="w-full max-w-lg bg-[#05112B] border border-sky-800/60 rounded-3xl p-6 sm:p-8 shadow-[0_0_60px_rgba(0,163,255,0.3)] space-y-6 relative animate-in fade-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center border-b border-sky-950 pb-4">
              <h3 className="font-bold text-base uppercase tracking-wider text-white flex items-center gap-2">
                <FaHeart className="text-[#00A3FF]" />
                <span>Edit Health Details</span>
              </h3>
              <button
                onClick={() => setIsEditingHealth(false)}
                className="p-2 rounded-xl bg-[#03091B] text-slate-400 hover:text-white transition cursor-pointer"
              >
                <FaTimes />
              </button>
            </div>

            <form onSubmit={handleHealthUpdate} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Diet Preference
                  </label>
                  <select
                    value={editDiet}
                    onChange={(e) => setEditDiet(e.target.value)}
                    className="w-full px-3 py-3 rounded-xl bg-[#03091B] border border-sky-950 text-white text-xs focus:outline-none focus:border-[#00A3FF] transition"
                  >
                    <option value="Non-Vegetarian">Non-Vegetarian</option>
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Vegan">Vegan</option>
                    <option value="Keto">Keto</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Fitness Level
                  </label>
                  <select
                    value={editFitnessLevel}
                    onChange={(e) => setEditFitnessLevel(e.target.value)}
                    className="w-full px-3 py-3 rounded-xl bg-[#03091B] border border-sky-950 text-white text-xs focus:outline-none focus:border-[#00A3FF] transition"
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Moderate">Moderate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Medical Conditions
                </label>
                <input
                  type="text"
                  required
                  value={editMedical}
                  onChange={(e) => setEditMedical(e.target.value)}
                  placeholder="e.g. None, Asthma, Diabetes..."
                  className="w-full px-4 py-3 rounded-xl bg-[#03091B] border border-sky-950 text-white text-xs focus:outline-none focus:border-[#00A3FF] transition"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Allergies
                </label>
                <input
                  type="text"
                  required
                  value={editAllergies}
                  onChange={(e) => setEditAllergies(e.target.value)}
                  placeholder="e.g. None, Peanuts, Dairy..."
                  className="w-full px-4 py-3 rounded-xl bg-[#03091B] border border-sky-950 text-white text-xs focus:outline-none focus:border-[#00A3FF] transition"
                />
              </div>

              <div className="pt-4 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsEditingHealth(false)}
                  className="px-5 py-3 rounded-xl bg-[#03091B] border border-sky-950 text-slate-300 font-bold text-xs hover:text-white transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-[#00A3FF] text-white font-bold text-xs uppercase tracking-wide hover:bg-[#008fe3] transition shadow-[0_0_20px_rgba(0,163,255,0.4)] cursor-pointer"
                >
                  Save Health Details
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

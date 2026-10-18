"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  FaArrowLeft,
  FaDumbbell,
  FaFire,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";

export default function WorkoutDetailPage() {
  const params = useParams();
  const { id } = params;

  const [workout, setWorkout] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    async function fetchWorkoutDetails() {
      try {
        setLoading(true);
        const res = await fetch(
          `https://api.abcz.workers.dev/api/fitlog/${id}`,
        );
        if (!res.ok) throw new Error("Failed to fetch");
        const json = await res.json();

        // Handle various API response structures safely
        const item = json.data || json.workout || json;
        setWorkout(item);
      } catch (err) {
        console.error("API Error, using fallback:", err);
        setWorkout({
          id: id,
          title: "Workout Details",
          category: "Strength",
          duration: "30 min",
          caloriesBurned: 200,
          description:
            "Perform with proper form, steady breathing, and controlled tempo.",
          day: "Today",
          completed: false,
        });
      } finally {
        setLoading(false);
      }
    }

    fetchWorkoutDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#030816] text-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-4 border-[#00A3FF] border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-slate-400 text-xs font-mono uppercase tracking-wider">
            Loading workout details...
          </p>
        </div>
      </div>
    );
  }

  // Extract title and properties safely supporting multiple API naming conventions
  const title =
    workout?.title || workout?.name || workout?.exercise || `Workout #${id}`;
  const category = workout?.category || "Strength";
  const duration = workout?.duration || workout?.time || "30 min";
  const calories =
    workout?.caloriesBurned || workout?.calories || workout?.burn || "200";
  const description =
    workout?.description ||
    workout?.details ||
    "Focus on form, steady execution, and core stability throughout the session.";
  const day = workout?.day || "Today";

  const fallbackImage =
    "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80";

  return (
    <div className="min-h-screen bg-[#030816] text-white px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Back button */}
        <Link
          href="/workouts"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-[#00A3FF] transition"
        >
          <FaArrowLeft />
          <span>Back to Workouts</span>
        </Link>

        {/* Main Detail Card */}
        <div className="bg-[#05112B]/90 border border-sky-800/40 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,163,255,0.15)] backdrop-blur-2xl">
          {/* Image Banner */}
          <div className="relative w-full h-64 sm:h-80 overflow-hidden bg-[#03091B]">
            <img
              src={workout?.image || fallbackImage}
              alt={title}
              className="w-full h-full object-cover object-center opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05112B] via-transparent to-black/30" />

            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-[#03091B]/80 border border-sky-900 text-[#00A3FF] font-bold backdrop-blur-md">
                  {category} • {day}
                </span>
                <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white drop-shadow-md pt-1">
                  {title}
                </h1>
              </div>
              {workout?.completed && (
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-bold backdrop-blur-md">
                  <FaCheckCircle /> Completed
                </span>
              )}
            </div>
          </div>

          <div className="p-8 sm:p-10 space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#03091B] border border-sky-950 p-5 rounded-2xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#061536] border border-sky-800/40 flex items-center justify-center text-[#00A3FF]">
                  <FaClock />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-500">
                    Duration
                  </p>
                  <p className="text-lg font-black text-white">{duration}</p>
                </div>
              </div>

              <div className="bg-[#03091B] border border-sky-950 p-5 rounded-2xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#061536] border border-sky-800/40 flex items-center justify-center text-[#00A3FF]">
                  <FaFire />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-500">
                    Calories Burned
                  </p>
                  <p className="text-lg font-black text-white">
                    {calories}{" "}
                    <span className="text-xs text-slate-400 font-normal">
                      kcal
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Description Section */}
            <div className="space-y-3 pt-2">
              <h3 className="font-bold text-xs uppercase tracking-wider text-slate-400">
                Workout Description & Instructions
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed bg-[#03091B] p-6 rounded-2xl border border-sky-950">
                {description}
              </p>
            </div>

            {/* Action Button */}
            <div className="pt-2 flex items-center justify-end">
              <Link
                href="/workouts"
                className="px-8 py-3.5 rounded-xl bg-[#00A3FF] text-white font-bold text-xs uppercase tracking-wide hover:bg-[#008fe3] transition shadow-[0_0_20px_rgba(0,163,255,0.4)]"
              >
                Done / Back to Library
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

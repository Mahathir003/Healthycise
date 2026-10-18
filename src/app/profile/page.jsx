"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/context/AuthContext";
import { User, Mail, Calendar, Edit3, Save } from "lucide-react";
import { useState } from "react";

export default function ProfilePage() {
  const { user, updateProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(user);

  const handleSave = (e) => {
    e.preventDefault();
    updateProfile(formData);
    setIsEditing(false);
  };

  return (
    <main className="min-h-screen bg-[#050B14] text-white flex flex-col">
      <Navbar activePage="profile" />

      <div className="flex-1 px-8 lg:px-16 py-10 max-w-7xl mx-auto w-full flex flex-col gap-8">
        {/* Hero banner */}
        <div className="relative p-8 rounded-3xl bg-gradient-to-r from-[#0a182f] to-[#040c18] border border-cyan-900/40 flex flex-col gap-3 overflow-hidden">
          <div className="absolute right-4 top-1/2 -translate-y-1/2 w-64 h-32 opacity-25">
            <div className="w-full h-full bg-cyan-500 blur-[80px] rounded-full" />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight">
            Hello, {user.name} 👋
          </h1>
          <p className="text-sm text-gray-400 max-w-xl">
            Manage your personal information, track your BMI, BMR, and monitor
            your physical evolution.
          </p>
        </div>

        {/* Profile Details and BMI / BMR Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Personal Info Box */}
          <div className="lg:col-span-2 p-8 rounded-3xl bg-[#091325] border border-cyan-950 flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-cyan-950 pb-4">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <User className="w-5 h-5 text-cyan-400" /> Personal Information
              </h3>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="px-4 py-2 rounded-xl bg-cyan-950 border border-cyan-800 text-cyan-400 text-xs font-semibold flex items-center gap-2 hover:bg-cyan-900 transition"
              >
                <Edit3 className="w-3.5 h-3.5" />{" "}
                {isEditing ? "Cancel" : "Edit Profile"}
              </button>
            </div>

            {isEditing ? (
              <form
                onSubmit={handleSave}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-gray-400">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="bg-cyan-950/50 border border-cyan-800 rounded-xl px-4 py-2.5 text-sm"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-gray-400">Age</label>
                  <input
                    type="number"
                    value={formData.age}
                    onChange={(e) =>
                      setFormData({ ...formData, age: e.target.value })
                    }
                    className="bg-cyan-950/50 border border-cyan-800 rounded-xl px-4 py-2.5 text-sm"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-gray-400">Gender</label>
                  <input
                    type="text"
                    value={formData.gender}
                    onChange={(e) =>
                      setFormData({ ...formData, gender: e.target.value })
                    }
                    className="bg-cyan-950/50 border border-cyan-800 rounded-xl px-4 py-2.5 text-sm"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-gray-400">Height (cm)</label>
                  <input
                    type="number"
                    value={formData.height}
                    onChange={(e) =>
                      setFormData({ ...formData, height: e.target.value })
                    }
                    className="bg-cyan-950/50 border border-cyan-800 rounded-xl px-4 py-2.5 text-sm"
                  />
                </div>
                <div className="md:col-span-2 flex justify-end pt-2">
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-cyan-500 text-black font-bold text-xs uppercase flex items-center gap-2"
                  >
                    <Save className="w-4 h-4" /> Save Changes
                  </button>
                </div>
              </form>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <span className="text-xs text-gray-500">Full Name</span>
                  <p className="text-sm font-semibold text-gray-200">
                    {user.name}
                  </p>
                </div>
                <div>
                  <span className="text-xs text-gray-500">Email Address</span>
                  <p className="text-sm font-semibold text-gray-200">
                    {user.email}
                  </p>
                </div>
                <div>
                  <span className="text-xs text-gray-500">Age</span>
                  <p className="text-sm font-semibold text-gray-200">
                    {user.age} years
                  </p>
                </div>
                <div>
                  <span className="text-xs text-gray-500">Gender</span>
                  <p className="text-sm font-semibold text-gray-200">
                    {user.gender}
                  </p>
                </div>
                <div>
                  <span className="text-xs text-gray-500">Height</span>
                  <p className="text-sm font-semibold text-gray-200">
                    {user.height} cm
                  </p>
                </div>
                <div>
                  <span className="text-xs text-gray-500">Activity Level</span>
                  <p className="text-sm font-semibold text-gray-200">
                    {user.activityLevel}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* BMI & BMR Card */}
          <div className="p-8 rounded-3xl bg-[#091325] border border-cyan-950 flex flex-col gap-6 justify-between">
            <h3 className="text-lg font-bold">BMI & BMR Status</h3>
            <div className="flex flex-col gap-4">
              <div className="p-5 rounded-2xl bg-[#050B14] border border-cyan-950">
                <span className="text-xs text-gray-400">
                  BMI (Body Mass Index)
                </span>
                <div className="text-3xl font-black text-cyan-400 pt-1">
                  21.5{" "}
                  <span className="text-xs bg-green-950 text-green-400 px-2 py-0.5 rounded-full border border-green-800 ml-2">
                    Normal
                  </span>
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-[#050B14] border border-cyan-950">
                <span className="text-xs text-gray-400">
                  BMR (Basal Metabolic Rate)
                </span>
                <div className="text-3xl font-black text-cyan-400 pt-1">
                  1,620{" "}
                  <span className="text-xs text-gray-500 font-normal">
                    kcal/day
                  </span>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-500">
              Calculated based on your physical metrics and routine activity.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

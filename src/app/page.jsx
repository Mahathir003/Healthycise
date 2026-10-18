"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import {
  ArrowRight,
  Flame,
  Dumbbell,
  Activity,
  User,
  Lock,
  Mail,
  CheckCircle2,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const { login, register } = useAuth();
  const router = useRouter();
  const [isLoginTab, setIsLoginTab] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoginTab) {
      login(email, password);
    } else {
      register(name, email, password);
    }
    router.push("/profile");
  };

  return (
    <main className="min-h-screen bg-[#050B14] text-white flex flex-col">
      <Navbar activePage="home" />

      {/* Hero Section */}
      <section className="relative px-8 lg:px-16 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto w-full">
        <div className="flex flex-col gap-6 z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs tracking-wider uppercase font-semibold w-fit">
            <span>TRACK</span> • <span>EAT</span> • <span>WORKOUT</span> •{" "}
            <span>IMPROVE</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight">
            Your Health. <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Priority.
            </span>
          </h1>
          <p className="text-gray-400 text-base lg:text-lg max-w-lg">
            Track your calories, plan your meals, choose your workouts and reach
            your fitness goals — all in one place.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <a
              href="#auth-section"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold flex items-center gap-3 shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:scale-105 transition"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Hero Background Illustration */}
        <div className="relative w-full h-[450px] lg:h-[550px] rounded-3xl overflow-hidden border border-cyan-900/30 shadow-[0_0_50px_rgba(6,182,212,0.15)]">
          <Image
            src="/images/hero-fitness-bg.jpg"
            alt="Fitness Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-transparent to-transparent" />
        </div>
      </section>

      {/* Feature Highlights Grid */}
      <section className="px-8 lg:px-16 py-12 max-w-7xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: <Flame className="w-6 h-6 text-cyan-400" />,
            title: "Track Your Food",
            desc: "Choose ingredients, enter weights, see the calories consumed.",
          },
          {
            icon: <Dumbbell className="w-6 h-6 text-cyan-400" />,
            title: "Plan Your Workouts",
            desc: "Pick workouts for today and tomorrow, see calories burned.",
          },
          {
            icon: <Activity className="w-6 h-6 text-cyan-400" />,
            title: "See Your Progress",
            desc: "Get weekly analysis and track your improvement.",
          },
          {
            icon: <User className="w-6 h-6 text-cyan-400" />,
            title: "Manage Your Profile",
            desc: "Update your info, track BMI, BMR and monthly weight changes.",
          },
        ].map((f, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-[#091325]/70 border border-cyan-950/80 hover:border-cyan-500/40 transition flex flex-col gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-800/40 flex items-center justify-center">
              {f.icon}
            </div>
            <h3 className="text-lg font-bold text-white">{f.title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Sign In / Register Section (Smooth scroll target) */}
      <section
        id="auth-section"
        className="px-8 lg:px-16 py-20 max-w-xl mx-auto w-full"
      >
        <div className="bg-[#091325] border border-cyan-900/50 rounded-3xl p-8 shadow-[0_0_40px_rgba(6,182,212,0.1)] flex flex-col gap-6">
          {/* Logo & Header */}
          <div className="text-center flex flex-col items-center gap-2">
            <div className="relative w-12 h-12">
              <Image
                src="/images/logo.png"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-2xl font-black uppercase tracking-wider text-cyan-400">
              Healthy<span className="text-white font-light">cise</span>
            </h2>
            <p className="text-sm text-gray-400">
              Welcome back! Log in or create your account to continue.
            </p>
          </div>

          {/* Toggle Tabs */}
          <div className="grid grid-cols-2 gap-2 bg-[#040810] p-1.5 rounded-2xl border border-cyan-950">
            <button
              onClick={() => setIsLoginTab(true)}
              className={`py-3 rounded-xl font-semibold text-sm transition ${isLoginTab ? "bg-cyan-500 text-black shadow" : "text-gray-400 hover:text-white"}`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsLoginTab(false)}
              className={`py-3 rounded-xl font-semibold text-sm transition ${!isLoginTab ? "bg-cyan-500 text-black shadow" : "text-gray-400 hover:text-white"}`}
            >
              Register
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {!isLoginTab && (
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-300">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-3.5 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full bg-[#040810] border border-cyan-950 rounded-xl px-4 py-3 pl-12 text-sm text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>
            )}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-gray-300">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-3.5 w-5 h-5 text-gray-500" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-[#040810] border border-cyan-950 rounded-xl px-4 py-3 pl-12 text-sm text-white focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-gray-300">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-3.5 w-5 h-5 text-gray-500" />
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full bg-[#040810] border border-cyan-950 rounded-xl px-4 py-3 pl-12 text-sm text-white focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold text-sm tracking-wider uppercase mt-2 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:opacity-90 transition"
            >
              {isLoginTab ? "Sign In" : "Create Account"}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}

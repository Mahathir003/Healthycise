"use client";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import { Bell, User as UserIcon } from "lucide-react";

export default function Navbar({ activePage }) {
  const { user } = useAuth();

  const scrollToAuth = (e) => {
    e.preventDefault();
    const element = document.getElementById("auth-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#auth-section";
    }
  };

  return (
    <nav className="w-full h-20 px-8 flex items-center justify-between border-b border-cyan-950/40 bg-[#050B14]/80 backdrop-blur-md sticky top-0 z-50">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 group">
        <div className="relative w-10 h-10">
          <Image
            src="/images/logo.png"
            alt="Healthycise Logo"
            fill
            className="object-contain drop-shadow-[0_0_10px_rgba(6,182,212,0.6)]"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-black tracking-widest bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent uppercase">
            Healthy<span className="text-white font-light">cise</span>
          </span>
          <span className="text-[9px] tracking-widest text-cyan-400/70 font-semibold uppercase -mt-1">
            Fitness & Nutrition
          </span>
        </div>
      </Link>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-8 bg-[#0a1527]/80 px-6 py-2.5 rounded-full border border-cyan-900/30">
        <Link
          href="/"
          className={`text-sm font-medium transition-colors ${activePage === "home" ? "text-cyan-400 font-semibold" : "text-gray-300 hover:text-cyan-400"}`}
        >
          Home
        </Link>
        <Link
          href="/workouts"
          className={`text-sm font-medium transition-colors ${activePage === "workouts" ? "text-cyan-400 font-semibold" : "text-gray-300 hover:text-cyan-400"}`}
        >
          Workouts
        </Link>
        <Link
          href="/diet"
          className={`text-sm font-medium transition-colors ${activePage === "diet" ? "text-cyan-400 font-semibold" : "text-gray-300 hover:text-cyan-400"}`}
        >
          Diet
        </Link>
        <Link
          href="/analysis"
          className={`text-sm font-medium transition-colors ${activePage === "analysis" ? "text-cyan-400 font-semibold" : "text-gray-300 hover:text-cyan-400"}`}
        >
          Analysis
        </Link>
        <Link
          href="/profile"
          className={`text-sm font-medium transition-colors ${activePage === "profile" ? "text-cyan-400 font-semibold" : "text-gray-300 hover:text-cyan-400"}`}
        >
          My Profile
        </Link>
      </div>

      {/* Right User / Auth Actions */}
      <div className="flex items-center gap-4">
        {user?.isLoggedIn ? (
          <>
            <button className="w-10 h-10 rounded-full bg-cyan-950/60 border border-cyan-800/50 flex items-center justify-center text-cyan-400 hover:bg-cyan-900/50 transition">
              <Bell className="w-4 h-4" />
            </button>
            <Link
              href="/profile"
              className="flex items-center gap-3 bg-[#0a1527] px-4 py-2 rounded-full border border-cyan-900/40 hover:border-cyan-500/50 transition"
            >
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-black font-bold text-xs">
                {user.name.charAt(0)}
              </div>
              <span className="text-sm font-medium text-gray-200">
                {user.name.split(" ")[0]}
              </span>
            </Link>
          </>
        ) : (
          <div className="flex items-center gap-3">
            <button
              onClick={scrollToAuth}
              className="text-sm font-medium px-5 py-2.5 rounded-full text-gray-300 hover:text-white transition"
            >
              Log In
            </button>
            <button
              onClick={scrollToAuth}
              className="text-sm font-semibold px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-black hover:opacity-90 shadow-[0_0_20px_rgba(6,182,212,0.4)] transition"
            >
              Sign Up
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

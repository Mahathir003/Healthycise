"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#050a14] border-t border-cyan-500/20 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl bg-cyan-950/70 border border-cyan-400/50 p-1 flex items-center justify-center shadow-[0_0_15px_rgba(0,229,255,0.25)] group-hover:scale-105 transition-transform">
                {/* Standardized image filename: /images/logo.png */}
                <img
                  src="/images/logo.png"
                  alt="Healthycise"
                  className="w-7 h-7 object-contain drop-shadow-[0_0_8px_rgba(0,229,255,0.7)]"
                  onError={(e) => {
                    // Fallback visual icon if the image file is not yet dropped into public/images/
                    e.currentTarget.style.display = "none";
                    e.currentTarget.nextSibling.style.display = "block";
                  }}
                />
                <span className="hidden text-cyan-400 text-lg font-black">
                  ⚡
                </span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center tracking-wider font-black text-xl leading-none">
                  <span className="text-white">HEALTHY</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 ml-0.5 tracking-widest font-extrabold">
                    CISE
                  </span>
                </div>
                <span className="text-[8px] font-bold tracking-[0.25em] text-cyan-400/80 uppercase mt-0.5">
                  FITNESS • NUTRITION
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Science-backed calorie tracking, routine scheduling, and biometric
              analysis designed to build consistent athletic performance.
            </p>

            <div className="flex items-center gap-2 pt-1 text-xs text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>All Systems Operational</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Platform
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Home Overview
                </Link>
              </li>
              <li>
                <Link
                  href="/workouts"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Workout Planner
                </Link>
              </li>
              <li>
                <Link
                  href="/diet"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Diet &amp; Nutrition
                </Link>
              </li>
              <li>
                <Link
                  href="/analysis"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Detailed Analysis
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  className="hover:text-cyan-400 transition-colors"
                >
                  My Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Metrics & Scientific Tools */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Calculators
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link
                  href="/profile"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Basal Metabolic Rate (BMR)
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Body Mass Index (BMI)
                </Link>
              </li>
              <li>
                <Link
                  href="/diet"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Macronutrient Balancer
                </Link>
              </li>
              <li>
                <Link
                  href="/analysis"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Calorie Deficit Tracker
                </Link>
              </li>
            </ul>
          </div>

          {/* Account & Access */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Access
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                {/* Smooth jump to the hero page sign-in block */}
                <Link
                  href="/#auth-section"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Sign In
                </Link>
              </li>
              <li>
                <Link
                  href="/#auth-section"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Register Account
                </Link>
              </li>
              <li>
                <span className="text-slate-500">Privacy &amp; Terms</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>&copy; {currentYear} HEALTHYCISE. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Better Choices, Bigger Results.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

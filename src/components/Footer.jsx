import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#030816] border-t border-sky-950/60 text-slate-400 py-12 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
        {/* Brand Column */}
        <div className="space-y-4 md:col-span-1">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <img
                src="/logo.png"
                alt="Healthycise Logo"
                className="w-8 h-8 object-contain drop-shadow-[0_0_10px_rgba(0,163,255,0.7)]"
              />
            </div>
            <span className="font-extrabold text-xl tracking-tight text-white">
              Healthy<span className="text-[#00A3FF]">cise</span>
            </span>
          </Link>
          <p className="text-xs leading-relaxed text-slate-400">
            Track your calories, plan your workouts, calculate your BMI & BMR,
            and build a healthier you.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h4 className="font-bold text-xs uppercase tracking-wider text-white">
            Platform
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/" className="hover:text-[#00A3FF] transition">
                Home Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/workouts"
                className="hover:text-[#00A3FF] transition"
              >
                Workouts & Burn
              </Link>
            </li>
            <li>
              <Link href="/diet" className="hover:text-[#00A3FF] transition">
                Diet & Nutrition
              </Link>
            </li>
            <li>
              <Link href="/profile" className="hover:text-[#00A3FF] transition">
                My Profile & BMI
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal / Support */}
        <div className="space-y-3">
          <h4 className="font-bold text-xs uppercase tracking-wider text-white">
            Support
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <span className="hover:text-[#00A3FF] transition cursor-pointer">
                Help Center
              </span>
            </li>
            <li>
              <span className="hover:text-[#00A3FF] transition cursor-pointer">
                Privacy Policy
              </span>
            </li>
            <li>
              <span className="hover:text-[#00A3FF] transition cursor-pointer">
                Terms of Service
              </span>
            </li>
          </ul>
        </div>

        {/* Newsletter / Motivation */}
        <div className="space-y-3">
          <h4 className="font-bold text-xs uppercase tracking-wider text-white">
            Daily Motivation
          </h4>
          <p className="text-xs italic text-slate-400 font-serif">
            “Discipline today builds the body you want tomorrow.”
          </p>
          <div className="pt-1">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#00A3FF] font-semibold">
              STAY CONSISTENT
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-sky-950/40 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Healthycise. All rights reserved.</p>
        <p className="flex items-center gap-1 mt-2 sm:mt-0">
          Built with <span className="text-[#00A3FF]">♥</span> for better
          health.
        </p>
      </div>
    </footer>
  );
}
